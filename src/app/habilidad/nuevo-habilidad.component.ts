import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../models/habilidad';
import { HabilidadService } from '../services/habilidad.service';

@Component({
  selector: 'app-nuevo-habilidad',
  templateUrl: './nuevo-habilidad.component.html',
  styleUrls: ['./nuevo-habilidad.component.css']
})

export class NuevoHabilidadComponent implements OnInit {
  
  form: any = {};
  habilidad: Habilidad;
  creado = false;
  failHabilidad = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private habilidadService: HabilidadService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.habilidadService.crear(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failHabilidad = false;
    },
    (err: any) => {
      this.mensajeFail = err.error.mensaje;
      this.creado = false;
      this.failHabilidad = true;
    }
    );
  }

volver(): void {
  window.history.back();
}

}
