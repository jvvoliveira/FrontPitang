import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-serie-detalhes',
  templateUrl: './serie-detalhes.component.html',
  styleUrls: ['./serie-detalhes.component.css']
})
export class SerieDetalhesComponent implements OnInit {

  constructor(private serieService: SerieService, 
    private activatedRoute: ActivatedRoute,private router: Router, private location: Location) { }

  serie = {}
  id;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.serieService.getById(this.id)
        .subscribe(response => {
          this.serie = response;
        })
    });
  }

  goAtualizarSerie(serie){
    this.router.navigate(['series/edicao', serie.id])
  }

  visualizarAtor(ator) {
    this.router.navigate(['atores/detalhes', ator.id]);
  }
  visualizarProdutor(produtor) {
    if(produtor.tipo == "Writing"){
      this.router.navigate(['autores/detalhes', produtor.id]);
    }
    if(produtor.tipo == "Directing"){
      this.router.navigate(['diretores/detalhes', produtor.id])
    }
  }

  deletarSerie(){
    let deletar = confirm("Deseja realmente deletar essa série?");
    if(deletar){
      this.serieService.deleteById(this.id).subscribe();
      this.location.back();
    }
  }
}
