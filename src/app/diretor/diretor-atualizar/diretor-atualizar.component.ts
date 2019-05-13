import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DiretorService } from '../diretor.service';

@Component({
  selector: 'app-diretor-atualizar',
  templateUrl: './diretor-atualizar.component.html',
  styleUrls: ['./diretor-atualizar.component.css']
})
export class DiretorAtualizarComponent implements OnInit {

  diretor;
  diretorDTO = {};
  id;

  formDetalhes: FormGroup = this.formBuilder.group({
    nome: [''],
    cidadeNatal: [''],
    genero:[''],
    altura:[''],
    paisOndeMora:['']
  });

  constructor(private diretorService: DiretorService, private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.diretorService.getById(this.id)
        .subscribe(response => {
          this.diretor = response;
          this.preencherCampos();
        })
    });
  }

  atualizarDiretor(){
    this.diretorService.updateById(this.id, this.diretorDTO).subscribe();
    console.log(this.diretorDTO);
    this.router.navigate(['diretores/detalhes', this.id])
  }

  preencherCampos(){
    this.formDetalhes.controls['nome'].setValue(this.diretor.nome);
    this.formDetalhes.controls['cidadeNatal'].setValue(this.diretor.cidadeNatal);
    this.formDetalhes.controls['genero'].setValue(this.diretor.genero);
    this.formDetalhes.controls['altura'].setValue(this.diretor.altura);
    this.formDetalhes.controls['paisOndeMora'].setValue(this.diretor.paisOndeMora)
  }

  addOtherSkillFormGroup(texto: string): FormGroup {  
    return this.formBuilder.group({    
      nome: [texto]  
    });  
  } 

}
