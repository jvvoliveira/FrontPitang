import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from './../filme.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-filme-atualizar',
  templateUrl: './filme-atualizar.component.html',
  styleUrls: ['./filme-atualizar.component.css']
})
export class FilmeAtualizarComponent implements OnInit {

  
  filme;
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
    generos: this.formBuilder.array([]),
    atores: this.formBuilder.array([]),
    produtores: this.formBuilder.array([])
  });

  constructor(private filmeService: FilmeService, private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.filmeService.getById(this.id)
        .subscribe(response => {
          this.filme = response;
          //inicializar arrays de objetos com os nomes dos objetos
          for(let i = 0; i < this.filme.generos.length; i++){
            this.programaDTO.generos[i] = this.filme.generos[i].descricao;
            this.generos += this.filme.generos[i].descricao+", ";
          }
          for(let i = 0; i < this.filme.atores.length; i++){
            this.programaDTO.atores[i] = this.filme.atores[i].nome;
            this.atores += this.filme.atores[i].nome+", ";
          }
          for(let i = 0; i < this.filme.produtores.length; i++){
            this.programaDTO.produtores[i] = this.filme.produtores[i].nome;
            this.produtores += this.filme.produtores[i].nome+", ";
          }
          this.preencherCampos();
        })
    });
  }

  atualizarFilme(){
    this.filmeService.updateById(this.id, this.programaDTO).subscribe();
    console.log(this.programaDTO);
    this.router.navigate(['filmes/detalhes', this.id]);
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
    this.formDetalhes.controls['titulo'].setValue(this.filme.titulo);
    this.formDetalhes.controls['descricao'].setValue(this.filme.descricao);
    this.formDetalhes.controls['paisDeOrigem'].setValue(this.filme.paisDeOrigem);
    this.formDetalhes.controls['lingua'].setValue(this.filme.lingua);
    this.formDetalhes.controls['anoLancamento'].setValue(this.filme.anoLancamento);
    this.formDetalhes.controls['duracao'].setValue(this.filme.duracao);
    this.filme.generos.forEach(genero => {
      (<FormArray>this.formDetalhes.get("generos")).push(this.addOtherSkillFormGroup(genero.descricao));
    })
    this.filme.atores.forEach(ator => {
      (<FormArray>this.formDetalhes.get("atores")).push(this.addOtherSkillFormGroup(ator.nome));
    })
    this.filme.produtores.forEach(produtor => {
      (<FormArray>this.formDetalhes.get("produtores")).push(this.addOtherSkillFormGroup(produtor.nome));
    })
  }

  addOtherSkillFormGroup(texto: string): FormGroup {  
    return this.formBuilder.group({    
      nome: [texto]  
    });  
  } 

}
