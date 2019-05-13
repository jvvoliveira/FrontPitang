import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from './../serie.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-serie-atualizar',
  templateUrl: './serie-atualizar.component.html',
  styleUrls: ['./serie-atualizar.component.css']
})
export class SerieAtualizarComponent implements OnInit {

  serie;
  generos: string = ', ';
  atores: string = ', ';
  produtores: string = ', ';
  programaDTO = {
    generos:[],
    atores:[],
    produtores:[]
  };
  id;

  formDetalhes: FormGroup = this.formBuilder.group({
    titulo: [''],
    descricao: [''],
    paisDeOrigem: [''],
    lingua: [''],
    anoLancamento: [''],
    duracao: [''],
    temporadas: [''],
    generos: this.formBuilder.array([]),
    atores: this.formBuilder.array([]),
    produtores: this.formBuilder.array([])
  });

  constructor(private serieService: SerieService, private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder, private router: Router, private location: Location) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.serieService.getById(this.id)
        .subscribe(response => {
          this.serie = response;
          //inicializar arrays de objetos com os nomes dos objetos
          for(let i = 0; i < this.serie.generos.length; i++){
            this.programaDTO.generos[i] = this.serie.generos[i].descricao;
            this.generos += this.serie.generos[i].descricao+", ";
          }
          for(let i = 0; i < this.serie.atores.length; i++){
            this.programaDTO.atores[i] = this.serie.atores[i].nome;
            this.atores += this.serie.atores[i].nome+", ";
          }
          for(let i = 0; i < this.serie.produtores.length; i++){
            this.programaDTO.produtores[i] = this.serie.produtores[i].nome;
            this.produtores += this.serie.produtores[i].nome+", ";
          }
          this.preencherCampos();
        })
    });
  }

  atualizarSerie(){
    this.serieService.updateById(this.id, this.programaDTO).subscribe();
    console.log(this.programaDTO);
    this.location.back();
  }

  modificarGeneros(generos: string){
    let arrayGeneros = generos.split(", ");
    this.programaDTO.generos = arrayGeneros;
  }
  modificarAtores(atores: string){
    let arrayAtores = atores.split(", ");
    this.programaDTO.atores = arrayAtores;
  }
  modificarProdutores(produtores: string){
    let arrayProdutores = produtores.split(", ");
    this.programaDTO.produtores = arrayProdutores;
  }

  preencherCampos(){
    this.formDetalhes.controls['titulo'].setValue(this.serie.titulo);
    this.formDetalhes.controls['descricao'].setValue(this.serie.descricao);
    this.formDetalhes.controls['paisDeOrigem'].setValue(this.serie.paisDeOrigem);
    this.formDetalhes.controls['lingua'].setValue(this.serie.lingua);
    this.formDetalhes.controls['anoLancamento'].setValue(this.serie.anoLancamento);
    this.formDetalhes.controls['duracao'].setValue(this.serie.duracao);
    this.formDetalhes.controls['temporadas'].setValue(this.serie.temporadas);
    this.serie.generos.forEach(genero => {
      (<FormArray>this.formDetalhes.get("generos")).push(this.addOtherSkillFormGroup(genero.descricao));
    })
    this.serie.atores.forEach(ator => {
      (<FormArray>this.formDetalhes.get("atores")).push(this.addOtherSkillFormGroup(ator.nome));
    })
    this.serie.produtores.forEach(produtor => {
      (<FormArray>this.formDetalhes.get("produtores")).push(this.addOtherSkillFormGroup(produtor.nome));
    })
  }

  addOtherSkillFormGroup(texto: string): FormGroup {  
    return this.formBuilder.group({    
      nome: [texto]  
    });  
  } 

}
