import { Component, OnInit } from '@angular/core';
import { Funcion } from '../models/funcion';
import { FuncionService } from '../services/funcion.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-detalle-funcion',
  templateUrl: './detalle-funcion.component.html',
  styleUrls: ['./detalle-funcion.component.css']
})
export class DetalleFuncionComponent implements OnInit {

  funcion: Funcion;

  data: any;

  constructor(private funcionService: FuncionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){ }

  ngOnInit(): void {
    const idFuncion = this.activatedRoute.snapshot.params['id'];
    this.funcionService.detalle(idFuncion).subscribe(data => {
      this.funcion = data;
    },
    err => {
      this.router.navigate(['']);
    });
  }


  volver(): void {
    window.history.back();
  }

}
