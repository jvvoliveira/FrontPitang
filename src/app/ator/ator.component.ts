import { Component, OnInit } from '@angular/core';
import { AtorService } from './ator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.css']
})
export class AtorComponent implements OnInit {

  atores = [];
  numeroPaginas;
  totalElements;
  page;

  constructor(private atorService: AtorService,
    private router: Router) { }

  ngOnInit() {
    this.atorService.getAll(0).subscribe(
      response => {
        this.atores = response['content'];
        this.numeroPaginas = response['totalPages'];
        this.totalElements = response['totalElements'];
        this.page = response['page'];
      }
    )
  }

  visualizar(ator) {
    this.router.navigate(['atores/detalhes', ator.id])
  }

  pesquisar(texto) {
    this.atorService.searchByNome(texto).subscribe(
      response => {
        this.atores = response['content'];
      }
    )
  }

  alterarPagina(pagina: number){
    this.atorService.getAll(pagina-1).subscribe(
      response =>{
        this.atores = response['content'];
      }
    )
  }

}
