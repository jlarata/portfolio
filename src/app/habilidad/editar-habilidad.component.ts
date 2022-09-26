import { Component, OnInit } from '@angular/core';
import { HabilidadService } from '../services/habilidad.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

  form: any = {};
  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';

  failInit = false;

  constructor(private habilidadService: HabilidadService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadService.detalle(id).subscribe( data => {
      this.form.idPersona = data.idPersona;
      this.form.idHabilidad = data.idHabilidad;
      this.form.nombreHabilidad = data.nombreHabilidad;
      this.form.tipoHabilidad = data.tipoHabilidad;
      this.form.nivelHabilidad = data.nivelHabilidad;
    },
    (err: any) => {
      this.failInit = true;
      this.router.navigate(['']);
    }
    );
  }

    onUpdate(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.habilidadService.editar(this.form, id).subscribe( data => {
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
