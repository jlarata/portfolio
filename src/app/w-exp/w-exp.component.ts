import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-w-exp',
  templateUrl: './w-exp.component.html',
  styleUrls: ['./w-exp.component.css']
})
export class WExpComponent implements OnInit {

  experiencia1: String = '';
  experiencia2: String = '';

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.experiencia1 = 'ejemplo de experiencia (clase string) llamada vía TS'
    this.experiencia2 = 'otro ejemplo de experiencia llamada en TS. Esto significa que desde aquí podría hacer solicitudes POST y GET a la API (backend) usando JWT (Jason Web Token)'
  }

}
