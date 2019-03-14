import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './../../modules/angular-material.module';
import { NgModule } from '@angular/core';
import { MapZoomButtonComponent } from './map-zoom-button/map-zoom-button.component';
import { MapLayerToolbarComponent } from './map-layer-toolbar/map-layer-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    MapZoomButtonComponent,
    MapLayerToolbarComponent
  ],
  exports: [
    MapZoomButtonComponent,
    MapLayerToolbarComponent
  ]
})
export class PartsModule { }
