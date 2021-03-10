import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from "./template/start/start.component";
import { EntryComponent } from "./pages/entry/entry.component";
import { RecordsComponent } from "./pages/records/records.component";
import { SurnamesComponent } from "./surnames/surnames.component";
import { DetailsComponent } from "./place/details/details.component";
import { OperationComponent } from "./place/operation/operation.component";
import { EventComponent } from "./place/event/event.component";
import { LinksComponent } from './components/links/links.component';

const routes: Routes = [

  {path: '', component: StartComponent},
  {path: 'Ingresar', component: EntryComponent},
  {path: 'Registrate', component: RecordsComponent},
  {path: 'Apellidos', component: SurnamesComponent},
  {path: 'Detalles/Usuarios', component: DetailsComponent},
  {path: 'Operaciones', component: OperationComponent},
  {path: 'Eventos', component: EventComponent},
  {path: 'Enlaces', component: LinksComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }