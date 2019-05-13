import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../services/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class SerieService extends BaseService{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(pagina) {
    return this.httpClient.get(this.URL+"series?size=6&page="+pagina); 
  }

  getById(id: string) {
    return this.httpClient.get(this.URL+"series/"+id);
  }
  deleteById(id: string) {
    return this.httpClient.delete(this.URL+"series/"+id);
  }

  updateById(id: string, filmeAtualizado){
    return this.httpClient.patch(this.URL+"series/"+id, filmeAtualizado);
  }
  searchByTitle(titulo: string){
    return this.httpClient.get(this.URL+"series/filtro/?titulo="+titulo);
  }
  searchByAno(ano: string){
    return this.httpClient.get(this.URL+"series/filtro/?ano="+ano);
  }
  searchByLingua(lingua: string){
    return this.httpClient.get(this.URL+"series/filtro/?lingua="+lingua);
  }
}
