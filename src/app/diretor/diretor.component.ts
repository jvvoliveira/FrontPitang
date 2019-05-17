import { Component, OnInit } from '@angular/core';
import { DiretorService } from './diretor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diretor',
  templateUrl: './diretor.component.html',
  styleUrls: ['./diretor.component.css']
})
export class DiretorComponent implements OnInit {

  
  diretores = [];
  numeroPaginas;
  totalElements;
  page;
  elements;

  constructor(private diretorService: DiretorService,
    private router: Router) { }

  ngOnInit() {
    this.diretorService.getAll(0).subscribe(
      response => {
        this.diretores = response['content'];
        this.numeroPaginas = response['totalPages'];
        this.totalElements = response['totalElements'];
        this.page = response['page'];
      }
    )
  }

  visualizar(diretor) {
    this.router.navigate(['diretores/detalhes', diretor.id])
  }

  pesquisar(texto) {
    this.diretorService.searchByNome(texto).subscribe(
      response => {
        this.diretores = response['content'];
      }
    )
  }

  alterarPagina(pagina: number){
    this.diretorService.getAll(pagina-1).subscribe(
      response =>{
        this.diretores = response['content'];
      }
    )
  }

}
