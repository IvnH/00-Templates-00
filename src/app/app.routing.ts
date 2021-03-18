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
import { BlogComponent } from './components/blog/blog.component';
import { ExploreComponent } from './components/explore/explore.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { IncrementationComponent } from './components/incrementation/incrementation.component';
import { VariantsComponent } from './components/variants/variants.component';

const routes: Routes = [

  {path: '', component: StartComponent},
  {path: 'Ingresar', component: EntryComponent},
  {path: 'Registrate', component: RecordsComponent},
  {path: 'Apellidos', component: SurnamesComponent},
  {path: 'Detalles/Usuarios', component: DetailsComponent},
  {path: 'Operaciones', component: OperationComponent},
  {path: 'Eventos', component: EventComponent},
  {path: 'Enlaces', component: LinksComponent},
  {path: 'Web/Blog', component: BlogComponent},
  {path: 'Explorar/Registros', component: ExploreComponent},
  {path: 'Clases/Estilos', component: BindingComponent},
  {path: 'Direcctivas', component: DirectiveComponent},
  {path: 'Incrementaciones', component: IncrementationComponent},
  {path: 'Variantes', component: VariantsComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }