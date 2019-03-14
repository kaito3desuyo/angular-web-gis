import { Component, OnInit, ViewChild, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { customAnimations } from 'src/app/animations';
import { ViewComponent, ControlZoomComponent } from 'ngx-openlayers';
import { MapLayer, MapLayerQuery, MapLayerService, MapLayerStore } from 'src/app/stores/map-layer/state';
import * as _ from 'lodash';

@Component({
  selector: 'app-openlayers-page',
  templateUrl: './openlayers-page.component.html',
  styleUrls: ['./openlayers-page.component.scss'],
  animations: customAnimations
})
export class OpenlayersPageComponent implements OnInit {

  zoom = 10;
  maps: MapLayer[] = [];

  @ViewChild(ViewComponent) view: ViewComponent;

  constructor(
    private mapLayerStore: MapLayerStore,
    private mapLayerQuery: MapLayerQuery,
    private mapLayerService: MapLayerService
  ) { }

  ngOnInit() {
    this.mapLayerService.add({
      name: '国土地理院 標準地図',
      url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
    });


    this.mapLayerQuery.selectAll().subscribe(result => {
      this.maps = _.cloneDeep(result);
    });


    console.log(this.mapLayerQuery.getAll());

  }

}
