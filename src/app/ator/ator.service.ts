import { HttpClient } from '@angular/common/http';
import { BaseService } from './../services/base/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtorService extends BaseService{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(pagina) {
    return this.httpClient.get(this.URL+"atores?size=6&page="+pagina); 
  }

  getById(id: string) {
    return this.httpClient.get(this.URL+"atores/"+id);
  }
  deleteById(id: string) {
    return this.httpClient.delete(this.URL+"atores/"+id);
  }
  updateById(id: string, atorAtualizado){
    return this.httpClient.patch(this.URL+"atores/"+id, atorAtualizado);
  }
  searchByNome(nome: string){
    return this.httpClient.get(this.URL+"atores/filtro/?nome="+nome);
  }

}
