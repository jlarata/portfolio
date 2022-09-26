import { Component, OnInit } from '@angular/core';
import { InstitucionService } from '../services/institucion.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-institucion',
  templateUrl: './editar-institucion.component.html',
  styleUrls: ['./editar-institucion.component.css']
})
export class EditarInstitucionComponent implements OnInit {

  form: any = {};
  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';

  failInit = false;

  constructor(private institucionService: InstitucionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.institucionService.detalle(id).subscribe( data => {
      this.form.nombreInstitucion = data.nombreInstitucion;
      this.form.direccionInstitucion = data.direccionInstitucion;
      this.form.contactoTel = data.contactoTel;
      this.form.contactoMail = data.contactoMail;
    },
    (err: any) => {
      this.failInit = true;
      this.router.navigate(['']);
    }
    );
  }

    onUpdate(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.institucionService.editar(this.form, id).subscribe( data => {
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
