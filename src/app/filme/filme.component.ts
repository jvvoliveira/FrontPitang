import { FilmeService } from './filme.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  constructor(private filmeService: FilmeService,
    private router: Router) { }

  filmes = [];
  page;
  numeroPaginas: number;
  totalElements;
  pesquisa = "titulo";

  ngOnInit() {
    this.filmeService.getAll(0).subscribe(
      response => {
        this.filmes = response['content'];
        this.numeroPaginas = response['totalPages'];
        this.totalElements = response['totalElements'];
        this.page = response['page'];
      }
    )
  }

  alterarPagina(pagina: number){
    this.filmeService.getAll(pagina-1).subscribe(
      response =>{
        this.filmes = response['content'];
      }
    )
  }
  
  visualizar(filme) {
    this.router.navigate(['filmes/detalhes', filme.id])
  }

  pesquisar(texto){
    if(this.pesquisa == "titulo"){
      this.filmeService.searchByTitle(texto).subscribe(
        response => {
          this.filmes = response['content'];
        }
      )
    }
    else if(this.pesquisa == "ano"){
      this.filmeService.searchByAno(texto).subscribe(
        response => {
          this.filmes = response['content'];
        }
      )
    }else if(this.pesquisa == "lingua"){
      this.filmeService.searchByLingua(texto).subscribe(
        response => {
          this.filmes = response['content'];
        }
      )
    }
    
  }
  alterarPesquisa(texto){
    this.pesquisa = texto;
    console.log(texto);
  }
}
