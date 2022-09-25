import { Component, OnInit } from '@angular/core';
import { Carrera } from '../models/carrera';
import { CarreraService } from '../services/carrera.service';

@Component({
  selector: 'app-nuevo-carrera',
  templateUrl: './nuevo-carrera.component.html',
  styleUrls: ['./nuevo-carrera.component.css']
})

export class NuevoCarreraComponent implements OnInit {
  
  form: any = {};
  carrera: Carrera;
  creado = false;
  failCarrera = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private carreraService: CarreraService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.carreraService.crear(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failCarrera = false;
    },
    (err: any) => {
      this.mensajeFail = err.error.mensaje;
      this.creado = false;
      this.failCarrera = true;
    }
    );
  }

volver(): void {
  window.history.back();
}

}
