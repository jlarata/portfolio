import { Component, Input, OnInit } from '@angular/core';
import { CarreraService } from '../services/carrera.service';
import { Carrera } from '../models/carrera';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-lista-carrera',
  templateUrl: './lista-carrera.component.html',
  styleUrls: ['./lista-carrera.component.css']
})

export class ListaCarreraComponent implements OnInit {

  @Input() user: string;
 

  carreras: Carrera[] = [];
  personas: Persona[] = [];

  data: any;
  datap: any;
  
  constructor(private carreraService: CarreraService, private personaService: PersonaService) { }

  ngOnInit() {
    this.cargarCarreras();
    this.cargarPersonas();
    
    
  }

  cargarCarrerasPorId(idP: number): void {
    
    this.carreraService.listaporid(idP).subscribe(data => {
      this.carreras = data;
    },
    (err: any) => {
      console.log(err);
    }
    );
  }


  cargarCarreras(): void {
    
  
    this.carreraService.lista().subscribe(data => {
      this.carreras = data;
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
      this.carreraService.borrar(id).subscribe(data => {
        this.cargarCarreras();
      });
    }
  }

}
