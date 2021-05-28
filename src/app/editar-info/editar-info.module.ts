import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarInfoPageRoutingModule } from './editar-info-routing.module';

import { EditarInfoPage } from './editar-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarInfoPageRoutingModule
  ],
  declarations: [EditarInfoPage]
})
export class EditarInfoPageModule {}
