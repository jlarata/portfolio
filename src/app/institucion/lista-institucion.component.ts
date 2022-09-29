import { Component, Input, OnInit } from '@angular/core';
import { Institucion } from '../models/institucion';
import { InstitucionService } from '../services/institucion.service';

import { PersonaService } from '../services/persona.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-lista-institucion',
  templateUrl: './lista-institucion.component.html',
  styleUrls: ['./lista-institucion.component.css']
})

export class ListaInstitucionComponent implements OnInit {

  @Input() user: string;
 

  instituciones: Institucion[] = [];

  data: any;
  
  constructor(private institucionService: InstitucionService, private personaService: PersonaService) { }

  ngOnInit() {
    this.cargarInstituciones(); 
  }

  cargarInstituciones(): void {
    
  
    this.institucionService.lista().subscribe(data => {
      this.instituciones = data;
    },
    (err: any) => {
      console.log(err);
    }
    );
  }

  onDelete(id: number): void {
    if (confirm('sure, master?')) {
      this.institucionService.borrar(id).subscribe(data => {
        this.cargarInstituciones();
      });
    }
  }

}
