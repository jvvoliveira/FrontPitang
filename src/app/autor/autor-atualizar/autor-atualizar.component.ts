import { ActivatedRoute, Router } from '@angular/router';
import { AutorService } from './../autor.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor-atualizar',
  templateUrl: './autor-atualizar.component.html',
  styleUrls: ['./autor-atualizar.component.css']
})
export class AutorAtualizarComponent implements OnInit {

  
   
  autor;
  autorDTO = {};
  id;

  formDetalhes: FormGroup = this.formBuilder.group({
    nome: [''],
    cidadeNatal: [''],
    genero:[''],
    altura:[''],
    paisOndeMora:['']
  });

  constructor(private autorService: AutorService, private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.autorService.getById(this.id)
        .subscribe(response => {
          this.autor = response;
          this.preencherCampos();
        })
    });
  }

  atualizarAutor(){
    this.autorService.updateById(this.id, this.autorDTO).subscribe();
    console.log(this.autorDTO);
    this.router.navigate(['autores/detalhes', this.id])
  }

  preencherCampos(){
    this.formDetalhes.controls['nome'].setValue(this.autor.nome);
    this.formDetalhes.controls['cidadeNatal'].setValue(this.autor.cidadeNatal);
    this.formDetalhes.controls['genero'].setValue(this.autor.genero);
    this.formDetalhes.controls['altura'].setValue(this.autor.altura);
    this.formDetalhes.controls['paisOndeMora'].setValue(this.autor.paisOndeMora)
  }

  addOtherSkillFormGroup(texto: string): FormGroup {  
    return this.formBuilder.group({    
      nome: [texto]  
    });  
  } 

}
