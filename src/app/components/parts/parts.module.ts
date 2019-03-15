import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './../../modules/angular-material.module';
import { NgModule } from '@angular/core';
import { MapZoomButtonComponent } from './map-zoom-button/map-zoom-button.component';
import { MapLayerToolbarComponent } from './map-layer-toolbar/map-layer-toolbar.component';
import { MapLayerAddDialogComponent } from './map-layer-add-dialog/map-layer-add-dialog.component';
import { VectorLayerAddDialogComponent } from './vector-layer-add-dialog/vector-layer-add-dialog.component';
import { MapModeButtonComponent } from '../map-mode-button/map-mode-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    MapZoomButtonComponent,
    MapModeButtonComponent,
    MapLayerToolbarComponent,
    MapLayerAddDialogComponent,
    VectorLayerAddDialogComponent
  ],
  exports: [
    MapZoomButtonComponent,
    MapModeButtonComponent,
    MapLayerToolbarComponent,
    MapLayerAddDialogComponent,
    VectorLayerAddDialogComponent
  ],
  entryComponents: [
    MapLayerAddDialogComponent,
    VectorLayerAddDialogComponent
  ]
})
export class PartsModule { }
