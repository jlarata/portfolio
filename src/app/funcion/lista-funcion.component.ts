import { Component, OnInit } from '@angular/core';
import { Funcion } from '../models/funcion';
import { FuncionService } from '../services/funcion.service';

import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
import { Institucion } from '../models/institucion';
import { InstitucionService } from '../services/institucion.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-lista-funcion',
  templateUrl: './lista-funcion.component.html',
  styleUrls: ['./lista-funcion.component.css']
})

export class ListaFuncionComponent implements OnInit {
 

  funciones: Funcion[] = [];
  personas: Persona[] = [];
  instituciones: Institucion[];

  data: any;
  datap: any;
  datai: any;
  
  constructor(private funcionService: FuncionService,
              private personaService: PersonaService,
              private institucionService: InstitucionService) { }

  ngOnInit() {
    this.cargarFunciones();
    this.cargarPersonas();
    this.cargarInstituciones();
    
    
  }

  cargarFuncionesPorId(idP: number): void {
    
    this.funcionService.listaporid(idP).subscribe(data => {
      this.funciones = data;
    },
    (err: any) => {
      console.log(err);
    }
    );
  }


  cargarFunciones(): void {
    
  
    this.funcionService.lista().subscribe(data => {
      this.funciones = data;
    },
    (err: any) => {
      console.log(err);
    }
    );
  }

  cargarPersonas(): void {
    
  
    this.personaService.lista().subscribe(datap => {
      this.personas = datap;
    },
    (err: any) => {
      console.log(err);
    }
    );
  }

  cargarInstituciones(): void {
    
  
    this.institucionService.lista().subscribe(datai => {
      this.instituciones = datai;
    },
    (err: any) => {
      console.log(err);
    }
    );
  }

  onDelete(id: number): void {
    if (confirm('sure, master?')) {
      this.funcionService.borrar(id).subscribe(data => {
        this.cargarFunciones();
      });
    }
  }

}
