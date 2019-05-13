import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DiretorService } from '../diretor.service';

@Component({
  selector: 'app-diretor-detalhes',
  templateUrl: './diretor-detalhes.component.html',
  styleUrls: ['./diretor-detalhes.component.css']
})
export class DiretorDetalhesComponent implements OnInit {

  constructor(private diretorService: DiretorService, 
    private activatedRoute: ActivatedRoute, private router: Router) { }

  diretor = {}
  id;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.diretorService.getById(this.id)
        .subscribe(response => {
          this.diretor = response;
        })
    });
  }

  goAtualizarDiretor(diretor){
    this.router.navigate(['diretores/edicao', diretor.id])
  }

  deletarDiretor(){
    let deletar = confirm("Deseja realmente deletar esse diretor?");
    if(deletar){
      this.diretorService.deleteById(this.id).subscribe();
      this.router.navigate(['diretores']);
    }
  }

}
