import { Component, OnInit } from '@angular/core';
import { CarreraService } from '../services/carrera.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-carrera',
  templateUrl: './editar-carrera.component.html',
  styleUrls: ['./editar-carrera.component.css']
})
export class EditarCarreraComponent implements OnInit {

  form: any = {};
  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';

  failInit = false;

  constructor(private carreraService: CarreraService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.carreraService.detalle(id).subscribe( data => {
      this.form.idPersona = data.idPersona;
      this.form.titulo = data.titulo;
      this.form.periodo = data.periodo;
      this.form.institucion = data.institucion;
      this.form.finalizado = data.finalizado;
    },
    (err: any) => {
      this.failInit = true;
      this.router.navigate(['']);
    }
    );
  }

    onUpdate(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.carreraService.editar(this.form, id).subscribe( data => {
        this.actualizado = true;
        this.failActualizado = false;
        this.msjOK = data.mensaje;
      },
      (err: any) => {
        this.actualizado = false;
        this.failActualizado = true;
        this.msjErr = err.error.mensaje;
      });
    }

    volver(): void {
      window.history.back();
    }
}
