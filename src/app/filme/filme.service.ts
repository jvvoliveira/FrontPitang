import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../services/base/base.service';

@Injectable()
export class FilmeService extends BaseService{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(pagina) {
    return this.httpClient.get(this.URL+"filmes?size=6&page="+pagina); 
    //return this.httpClient.get(this.URL+"filmes"); 
  }

  getById(id: string) {
    return this.httpClient.get(this.URL+"filmes/"+id);
  }
  deleteById(id: string) {
    return this.httpClient.delete(this.URL+"filmes/"+id);
  }
  updateById(id: string, filmeAtualizado){
    return this.httpClient.patch(this.URL+"filmes/"+id, filmeAtualizado);
  }
  searchByTitle(titulo: string){
    return this.httpClient.get(this.URL+"filmes/filtro/?titulo="+titulo);
  }
  searchByAno(ano: string){
    return this.httpClient.get(this.URL+"filmes/filtro/?ano="+ano);
  }
  searchByLingua(lingua: string){
    return this.httpClient.get(this.URL+"filmes/filtro/?lingua="+lingua);
  }

}
