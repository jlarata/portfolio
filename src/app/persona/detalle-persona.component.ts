import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {

  persona: Persona;

  constructor(private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const idPersona = this.activatedRoute.snapshot.params['id'];
    this.personaService.detalle(idPersona).subscribe(data => {
      this.persona = data;
    },
    err => {
      this.router.navigate(['']);
    })
  }
  volver(): void {
    window.history.back();
  }

}
