import { ActivatedRoute, Router } from '@angular/router';
import { AtorService } from './../ator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ator-detalhes',
  templateUrl: './ator-detalhes.component.html',
  styleUrls: ['./ator-detalhes.component.css']
})
export class AtorDetalhesComponent implements OnInit {

  constructor(private atorService: AtorService, 
    private activatedRoute: ActivatedRoute,private router: Router) { }

  ator = {}
  id;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.atorService.getById(this.id)
        .subscribe(response => {
          this.ator = response;
        })
    });
  }

  goAtualizarAtor(ator){
    this.router.navigate(['atores/edicao', ator.id])
  }

  deletarAtor(){
    let deletar = confirm("Deseja realmente deletar esse ator?");
    if(deletar){
      this.atorService.deleteById(this.id).subscribe();
      this.router.navigate(['atores']);
    }
  }

}
