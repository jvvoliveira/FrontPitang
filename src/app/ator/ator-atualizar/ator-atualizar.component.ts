import { AtorService } from './../ator.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ator-atualizar',
  templateUrl: './ator-atualizar.component.html',
  styleUrls: ['./ator-atualizar.component.css']
})
export class AtorAtualizarComponent implements OnInit {

   
  ator;
  atorDTO = {};
  id;

  formDetalhes: FormGroup = this.formBuilder.group({
    nome: [''],
    cidadeNatal: [''],
    genero:[''],
    altura:[''],
    paisOndeMora:['']
  });

  constructor(private atorService: AtorService, private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.atorService.getById(this.id)
        .subscribe(response => {
          this.ator = response;
          this.preencherCampos();
        })
    });
  }

  atualizarAtor(){
    this.atorService.updateById(this.id, this.atorDTO).subscribe();
    console.log(this.atorDTO);
    this.router.navigate(['atores/detalhes', this.id])
  }

  preencherCampos(){
    this.formDetalhes.controls['nome'].setValue(this.ator.nome);
    this.formDetalhes.controls['cidadeNatal'].setValue(this.ator.cidadeNatal);
    this.formDetalhes.controls['genero'].setValue(this.ator.genero);
    this.formDetalhes.controls['altura'].setValue(this.ator.altura);
    this.formDetalhes.controls['paisOndeMora'].setValue(this.ator.paisOndeMora)
  }

  addOtherSkillFormGroup(texto: string): FormGroup {  
    return this.formBuilder.group({    
      nome: [texto]  
    });  
  } 

}
