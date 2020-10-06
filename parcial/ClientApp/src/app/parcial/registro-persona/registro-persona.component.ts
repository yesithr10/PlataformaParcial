import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {

  persona: Persona;
  personas: Persona[];
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona = new Persona();
  }


  add() {
    alert('Se ha añadido a una nueva persona' + JSON.stringify(this.persona));
    
    this.personaService.post(this.persona)
  }

  bandera: number;

  validacion(){
    this.bandera = 0;
    this.personas = this.personaService.get();
    if (this.personas.length === null){
      this.bandera = 1;
      alert('Se ha añadido a una nueva persona' + JSON.stringify(this.persona));
      this.personaService.post(this.persona)
    }
    for (let i = 0; i < this.personas.length; i++) {
      if (this.personas[i].cedula === this.persona.cedula){
        alert("Esta persona ya se encuentra registrada");
        this.bandera = 1;
      }
    }
    
    if (this.bandera === 0){
      this.add();
    }
  }

}
