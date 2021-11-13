import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(protected http:HttpClient) { }

  lista_usuarios()
  {
    return this.http.get("http://localhost:82/VETERINARIAPROYECTO/index.php/api/usuarios/getlistausuarios2");
  }
  
}
