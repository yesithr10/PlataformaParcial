import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPersonaComponent } from './parcial/consulta-persona/consulta-persona.component';
import { RegistroPersonaComponent } from './parcial/registro-persona/registro-persona.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'consultaPersona',
    component: ConsultaPersonaComponent
  },

  {
    path: 'registroPersona',
    component: RegistroPersonaComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    
    CommonModule,
    RouterModule.forRoot(routes)
  ],  exports: [RouterModule]
})
export class AppRoutingModule { }
