import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from '../services/persona.service'; 
import { Persona } from '../models/persona'; 

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})

export class ListaPersonaComponent implements OnInit {

  @Input() user: string;

  //array de personas
  
  personatitulo: String = "Ariel Wasserman";
  personas: Persona[] = [];
  
  data: any;
  stringdepersonas: String = 'lalala';

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.cargarPersonas();
    
    
    
  }

  //el siguiente método es el que se sscribe al observable que devuelve el cliente http.
  // o sea, donde la respuesta del REST devuelve una lista de productos que se almacenan en el array.
  cargarPersonas(): void {
    
  
    this.personaService.lista().subscribe(data => {
      this.personas = data;
    },
    (err: any) => {
      console.log(err);
    }
    );
  }

  onDelete(id: number): void {
    if (confirm('sure, master?')) {
      this.personaService.borrar(id).subscribe(data => {
        this.cargarPersonas();
      });
    }
  }

}
