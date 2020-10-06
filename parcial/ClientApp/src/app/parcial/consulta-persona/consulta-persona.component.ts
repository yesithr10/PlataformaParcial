import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/parcial/models/persona';

@Component({
  selector: 'app-consulta-persona',
  templateUrl: './consulta-persona.component.html',
  styleUrls: ['./consulta-persona.component.css']
})
export class ConsultaPersonaComponent implements OnInit {
  personas:Persona[];
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.get();
  }
  
  get(){
    this.personas = this.personaService.get();
    
  }

}
