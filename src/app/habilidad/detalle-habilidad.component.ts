import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../models/habilidad';
import { HabilidadService } from '../services/habilidad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';


@Component({
  selector: 'app-detalle-habilidad',
  templateUrl: './detalle-habilidad.component.html',
  styleUrls: ['./detalle-habilidad.component.css']
})
export class DetalleHabilidadComponent implements OnInit {

  habilidad: Habilidad;
  personas: Persona[] = [];

  datap: any;

  constructor(private habilidadService: HabilidadService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private personaService: PersonaService) { }

  ngOnInit(): void {
    const idHabilidad = this.activatedRoute.snapshot.params['id'];
    this.habilidadService.detalle(idHabilidad).subscribe(data => {
      this.habilidad = data;
    },
    err => {
      this.router.navigate(['']);
    });
    this.cargarPersonas();
  }

  cargarPersonas(): void {
    
  
    this.personaService.lista().subscribe(datap => {
      this.personas = datap;
    },
    (err: any) => {
      console.log(err);
    }
    );
  }

  volver(): void {
    window.history.back();
  }

}
