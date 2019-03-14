import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    MatCardModule,
    MatSliderModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    MatCardModule,
    MatSliderModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class AngularMaterialModule { }
