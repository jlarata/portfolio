import { Component, OnInit } from '@angular/core';
import { Institucion } from '../models/institucion';
import { InstitucionService } from '../services/institucion.service';

@Component({
  selector: 'app-nuevo-institucion',
  templateUrl: './nuevo-institucion.component.html',
  styleUrls: ['./nuevo-institucion.component.css']
})

export class NuevoInstitucionComponent implements OnInit {
  
  form: any = {};
  institucion: Institucion;
  creado = false;
  failInstitucion = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private institucionService: InstitucionService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.institucionService.crear(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failInstitucion = false;
    },
    (err: any) => {
      this.mensajeFail = err.error.mensaje;
      this.creado = false;
      this.failInstitucion = true;
    }
    );
  }

volver(): void {
  window.history.back();
}

}
