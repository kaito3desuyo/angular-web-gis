import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './../../modules/angular-material.module';
import { NgModule } from '@angular/core';
import { MapZoomButtonComponent } from './map-zoom-button/map-zoom-button.component';
import { MapLayerToolbarComponent } from './map-layer-toolbar/map-layer-toolbar.component';
import { MapLayerAddDialogComponent } from './map-layer-add-dialog/map-layer-add-dialog.component';

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
    MapLayerToolbarComponent,
    MapLayerAddDialogComponent
  ],
  exports: [
    MapZoomButtonComponent,
    MapLayerToolbarComponent,
    MapLayerAddDialogComponent
  ],
  entryComponents: [
    MapLayerAddDialogComponent
  ]
})
export class PartsModule { }
