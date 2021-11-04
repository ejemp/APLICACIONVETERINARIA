import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from './publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  cargando:boolean = false;
  datos:any = [];
  constructor(protected publicaciones: PublicacionesService) 
  {
    this.cargando = true;
    this.publicaciones.lista_usuarios().subscribe(
      (res:any) => {
        console.log(res);
        this.datos = res.datos;
      },
      (error:any)=>{
        console.log(error);
        
      }
    );
   }

  
  ngOnInit(): void {
  }

}
