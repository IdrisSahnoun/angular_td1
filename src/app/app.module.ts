import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './components/residences/residences.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResidenceDetailsComponentComponent } from './components/residences/residence-details-component/residence-details-component.component';
import { AddResidenceComponentComponent } from './components/residences/add-residence-component/add-residence-component.component';
import { ApartmentsComponentComponent } from './components/Appartments/apartments-component/apartments-component.component';
import { ApartmentsByResidenceComponentComponent } from './components/Appartments/apartments-by-residence-component/apartments-by-residence-component.component';
import { AddApartmentComponentComponent } from './components/Appartments/add-apartment-component/add-apartment-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    HeaderComponent,
    NotFoundComponent,
    ResidenceDetailsComponentComponent,
    AddResidenceComponentComponent,
    ApartmentsComponentComponent,
    ApartmentsByResidenceComponentComponent,
    AddApartmentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
