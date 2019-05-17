import { HttpClient } from '@angular/common/http';
import { BaseService } from './../services/base/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiretorService extends BaseService{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(pagina) {
    return this.httpClient.get(this.URL+"produtores/diretores?size=6&page="+pagina); 
  }

  getById(id: string) {
    return this.httpClient.get(this.URL+"produtores/"+id);
  }
  deleteById(id: string) {
    return this.httpClient.delete(this.URL+"produtores/"+id);
  }
  updateById(id: string, diretorAtualizado){
    return this.httpClient.patch(this.URL+"produtores/"+id, diretorAtualizado);
  }
  searchByNome(nome: string){
    return this.httpClient.get(this.URL+"produtores/diretores/filtro/?nome="+nome);
  }
}
