import { OpenlayersPageComponent } from './components/openlayers-page/openlayers-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopPageComponent } from './components/top-page/top-page.component';

const routes: Routes = [
  {
    path: '',
    component: OpenlayersPageComponent
  },
  {
    path: 'openlayers',
    component: OpenlayersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
