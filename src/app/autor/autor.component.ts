import { AutorService } from './autor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  
  autores = [];
  numeroPaginas;
  totalElements;
  page;
  elements;

  constructor(private autorService: AutorService,
    private router: Router) { }

  ngOnInit() {
    this.autorService.getAll(0).subscribe(
      response => {
        this.autores = response['content'];
        this.numeroPaginas = response['totalPages'];
        this.totalElements = response['totalElements'];
        this.page = response['page'];
      }
    )
  }

  visualizar(autor) {
    this.router.navigate(['autores/detalhes', autor.id])
  }

  pesquisar(texto) {
    this.autorService.searchByNome(texto).subscribe(
      response => {
        this.autores = response['content'];
      }
    )
  }

  alterarPagina(pagina: number){
    this.autorService.getAll(pagina-1).subscribe(
      response =>{
        this.autores = response['content'];
      }
    )
  }

}
