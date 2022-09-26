import { Component, OnInit } from '@angular/core';
import { FuncionService } from '../services/funcion.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-funcion',
  templateUrl: './editar-funcion.component.html',
  styleUrls: ['./editar-funcion.component.css']
})
export class EditarFuncionComponent implements OnInit {

  form: any = {};
  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';

  failInit = false;

  constructor(private funcionService: FuncionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.funcionService.detalle(id).subscribe( data => {
      this.form.idPersona = data.idPersona;
      this.form.idInstitucion = data.idInstitucion;
      this.form.periodoFuncion = data.periodoFuncion;
      this.form.descripcionFuncion = data.descripcionFuncion;
    },
    (err: any) => {
      this.failInit = true;
      this.router.navigate(['']);
    }
    );
  }

    onUpdate(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.funcionService.editar(this.form, id).subscribe( data => {
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
