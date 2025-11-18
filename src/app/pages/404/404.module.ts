import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { 404PageRoutingModule } from './404-routing.module';

import { 404Page } from './404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    404PageRoutingModule
  ],
  declarations: [404Page]
})
export class 404PageModule {}
