import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from '../models/habilidad';
import { HabilidadService } from '../services/habilidad.service';

import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-lista-habilidad',
  templateUrl: './lista-habilidad.component.html',
  styleUrls: ['./lista-habilidad.component.css']
})

export class ListaHabilidadComponent implements OnInit {

  @Input() user: string;
 

  habilidades: Habilidad[] = [];
  personas: Persona[] = [];

  data: any;
  datap: any;
  
  constructor(private habilidadService: HabilidadService, private personaService: PersonaService) { }

  ngOnInit() {
    this.cargarHabilidades();
    this.cargarPersonas();
    
    
  }

  cargarHabilidadesPorId(idP: number): void {
    
    this.habilidadService.listaporid(idP).subscribe(data => {
      this.habilidades = data;
    },
    (err: any) => {
      console.log(err);
    }
    );
  }


  cargarHabilidades(): void {
    
  
    this.habilidadService.lista().subscribe(data => {
      this.habilidades = data;
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

  onDelete(id: number): void {
    if (confirm('sure, master?')) {
      this.habilidadService.borrar(id).subscribe(data => {
        this.cargarHabilidades();
      });
    }
  }

}
