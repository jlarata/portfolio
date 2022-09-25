import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-nuevo-persona',
  templateUrl: './nuevo-persona.component.html',
  styleUrls: ['./nuevo-persona.component.css']
})

export class NuevoPersonaComponent implements OnInit {
  
  form: any = {};
  persona: Persona;
  creado = false;
  failPersona = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.personaService.crear(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failPersona = false;
    },
    (err: any) => {
      this.mensajeFail = err.error.mensaje;
      this.creado = false;
      this.failPersona = true;
    }
    );
  }

volver(): void {
  window.history.back();
}

}
