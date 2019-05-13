import { FilmeService } from './../filme.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.component.html',
  styleUrls: ['./filme-detalhes.component.css']
})
export class FilmeDetalhesComponent implements OnInit {

  constructor(private filmeService: FilmeService, 
    private activatedRoute: ActivatedRoute,private router: Router) { }

  filme = {}
  id;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.filmeService.getById(this.id)
        .subscribe(response => {
          this.filme = response;
        })
    });
  }

  goAtualizarFilme(filme){
    this.router.navigate(['filmes/edicao', filme.id]);
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

  deletarFilme(){
    let deletar = confirm("Deseja realmente deletar esse filme?");
    if(deletar){
      this.filmeService.deleteById(this.id).subscribe();
      this.router.navigate(['filmes']);
    }
  }

}
