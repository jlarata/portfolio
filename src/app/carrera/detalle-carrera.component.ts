import { Component, OnInit } from '@angular/core';
import { Carrera } from '../models/carrera';
import { CarreraService } from '../services/carrera.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalle-carrera',
  templateUrl: './detalle-carrera.component.html',
  styleUrls: ['./detalle-carrera.component.css']
})
export class DetalleCarreraComponent implements OnInit {

  carrera: Carrera;

  constructor(private carreraService: CarreraService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const idCarrera = this.activatedRoute.snapshot.params['id'];
    this.carreraService.detalle(idCarrera).subscribe(data => {
      this.carrera = data;
    },
    err => {
      this.router.navigate(['']);
    })
  }
  volver(): void {
    window.history.back();
  }

}
