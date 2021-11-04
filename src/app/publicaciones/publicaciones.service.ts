import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(protected http: HttpClient) { }

  lista_publicaciones()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  lista_usuarios()
  {
    return this.http.get("http://localhost:82/VETERINARIAPROYECTO/index.php/api/usuarios/getlistausuarios2");
  }
}
