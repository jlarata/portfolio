import { Component, OnInit } from '@angular/core';
import { Institucion } from '../models/institucion';
import { InstitucionService } from '../services/institucion.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-detalle-institucion',
  templateUrl: './detalle-institucion.component.html',
  styleUrls: ['./detalle-institucion.component.css']
})
export class DetalleInstitucionComponent implements OnInit {

  institucion: Institucion;

  data: any;

  constructor(private institucionService: InstitucionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){ }

  ngOnInit(): void {
    const idInstitucion = this.activatedRoute.snapshot.params['id'];
    this.institucionService.detalle(idInstitucion).subscribe(data => {
      this.institucion = data;
    },
    err => {
      this.router.navigate(['']);
    });
  }


  volver(): void {
    window.history.back();
  }

}
