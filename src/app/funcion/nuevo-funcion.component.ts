import { Component, OnInit } from '@angular/core';
import { Funcion } from '../models/funcion';
import { FuncionService } from '../services/funcion.service';

@Component({
  selector: 'app-nuevo-funcion',
  templateUrl: './nuevo-funcion.component.html',
  styleUrls: ['./nuevo-funcion.component.css']
})

export class NuevoFuncionComponent implements OnInit {
  
  form: any = {};
  funcion: Funcion;
  creado = false;
  failFuncion = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private funcionService: FuncionService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.funcionService.crear(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failFuncion = false;
    },
    (err: any) => {
      this.mensajeFail = err.error.mensaje;
      this.creado = false;
      this.failFuncion = true;
    }
    );
  }

volver(): void {
  window.history.back();
}

}
