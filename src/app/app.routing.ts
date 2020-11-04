import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from "./template/start/start.component";
import { EntryComponent } from "./pages/entry/entry.component";
import { RecordsComponent } from "./pages/records/records.component";

const routes: Routes = [

  {path: '', component: StartComponent},
  {path: 'Ingresar', component: EntryComponent},
  {path: 'Registrate', component: RecordsComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }