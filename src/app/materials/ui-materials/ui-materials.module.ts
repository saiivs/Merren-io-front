import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class UIMaterialsModule {}
