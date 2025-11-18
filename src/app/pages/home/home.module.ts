import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

import { MisDatosComponent } from 'src/app/components/mis-datos/mis-datos.component';
import { ExperienciaLaboralComponent } from 'src/app/components/experiencia-laboral/experiencia-laboral.component';
import { CertificacionesComponent } from 'src/app/components/certificaciones/certificaciones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    MisDatosComponent,
    ExperienciaLaboralComponent,
    CertificacionesComponent
  ]
})
export class HomePageModule {}
