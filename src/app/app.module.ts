import { AngularMaterialModule } from './modules/angular-material.module';
import { OpenlayersPageComponent } from './components/openlayers-page/openlayers-page.component';
import { TopPageComponent } from './components/top-page/top-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularOpenlayersModule } from 'ngx-openlayers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { PartsModule } from './components/parts/parts.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { MapLayerQuery } from './stores/map-layer/state';

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    OpenlayersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularOpenlayersModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    PartsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
