import { ActivatedRoute, Router } from '@angular/router';
import { AutorService } from './../autor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor-detalhes',
  templateUrl: './autor-detalhes.component.html',
  styleUrls: ['./autor-detalhes.component.css']
})
export class AutorDetalhesComponent implements OnInit {

  constructor(private autorService: AutorService, 
    private activatedRoute: ActivatedRoute,private router: Router) { }

  autor = {}
  id;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.autorService.getById(this.id)
        .subscribe(response => {
          this.autor = response;
        })
    });
  }

  goAtualizarAutor(autor){
    this.router.navigate(['autores/edicao', autor.id])
  }

  deletarAutor(){
    let deletar = confirm("Deseja realmente deletar esse autor?");
    if(deletar){
      this.autorService.deleteById(this.id).subscribe();
      this.router.navigate(['autores']);
    }
  }

}
