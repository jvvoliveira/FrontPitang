import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService,
    private router: Router) { }

  series = [];
  totalElements;
  page;
  numeroPaginas: number;
  pesquisa = "titulo";

  ngOnInit() {
    this.serieService.getAll(0).subscribe(
      response => {
        this.series = response['content'];
        this.numeroPaginas = response['totalPages'];
        this.totalElements = response['totalElements'];
        this.page = response['page'];
      }
    )
  }

  alterarPagina(pagina: number){
    this.serieService.getAll(pagina-1).subscribe(
      response =>{
        this.series = response['content'];
      }
    )
  }
  
  visualizar(serie) {
    this.router.navigate(['series/detalhes', serie.id])
  }

  pesquisar(texto){
    if(this.pesquisa == "titulo"){
      this.serieService.searchByTitle(texto).subscribe(
        response => {
          this.series = response['content'];
        }
      )
    }
    else if(this.pesquisa == "ano"){
      this.serieService.searchByAno(texto).subscribe(
        response => {
          this.series = response['content'];
        }
      )
    }else if(this.pesquisa == "lingua"){
      this.serieService.searchByLingua(texto).subscribe(
        response => {
          this.series = response['content'];
        }
      )
    }
    
  }
  alterarPesquisa(texto){
    this.pesquisa = texto;
    console.log(texto);
  }
}
