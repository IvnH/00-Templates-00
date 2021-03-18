import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { StartComponent } from './template/start/start.component';
import { EntryComponent } from './pages/entry/entry.component';
import { RecordsComponent } from './pages/records/records.component';
import { AppRoutingModule } from './app.routing';
import { SurnamesComponent } from './surnames/surnames.component';
import { DetailsComponent } from './place/details/details.component';
import { OperationComponent } from './place/operation/operation.component';
import { PlaceModule } from './place/place.module';
import { LinksComponent } from './components/links/links.component';
import { BlogComponent } from './components/blog/blog.component';
import { ExploreComponent } from './components/explore/explore.component';
import { BindingComponent } from './components/binding/binding.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { IncrementationComponent } from './components/incrementation/incrementation.component';
import { VariantsComponent } from './components/variants/variants.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartComponent,
    EntryComponent,
    RecordsComponent,
    SurnamesComponent,
    DetailsComponent,
    OperationComponent,
    LinksComponent,
    BlogComponent,
    ExploreComponent,
    BindingComponent,
    StylebindingComponent,
    DirectiveComponent,
    IncrementationComponent,
    VariantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaceModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
