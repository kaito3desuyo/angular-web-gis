import { Component, OnInit, ViewChild, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { customAnimations } from 'src/app/animations';
import { ViewComponent, ControlZoomComponent } from 'ngx-openlayers';
import { MapLayer, MapLayerQuery, MapLayerService, MapLayerStore } from 'src/app/stores/map-layer/state';
import * as _ from 'lodash';
import * as ol from 'openlayers';
import { VectorLayer, VectorLayerQuery, VectorLayerService } from 'src/app/stores/vector-layer/state';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-openlayers-page',
  templateUrl: './openlayers-page.component.html',
  styleUrls: ['./openlayers-page.component.scss'],
  animations: customAnimations
})
export class OpenlayersPageComponent implements OnInit {

  zoom = 10;
  maps: MapLayer[] = [];
  vectors: VectorLayer[] = [];

  mode = null;

  undoStack = [];
  redoStack = [];

  @ViewChild(ViewComponent) view: ViewComponent;

  constructor(
    private mapLayerStore: MapLayerStore,
    private mapLayerQuery: MapLayerQuery,
    private mapLayerService: MapLayerService,
    private vectorLayerQuery: VectorLayerQuery,
    private vectorLayerService: VectorLayerService
  ) { }

  ngOnInit() {
    this.mapLayerService.add({
      name: '国土地理院 標準地図',
      url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
    });


    this.mapLayerQuery.selectAll().subscribe(result => {
      this.maps = _.cloneDeep(result);
    });

    this.vectorLayerQuery.selectAll().subscribe(result => {
      this.vectors = _.cloneDeep(result);
    });


    console.log(this.mapLayerQuery.getAll());

  }

  onSelectType(event: string) {
    console.log(event);
    this.mode = event;
  }

  test(event, i) {
    console.log(event);
  }

  translateCoordinate(coordinate: [number, number]): [number, number] {
    return ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326');
  }

  drawStart(event: any) {
    const targetVectorLayer = _.find(this.vectors, (obj) => obj.isSelect === true);
    const tmp = _.cloneDeep(targetVectorLayer.contents);

    this.redoStack = [];
    this.undoStack.unshift(tmp);
  }

  drawEnd(event: any) {

    console.log(event);

    const coordinates =
      this.mode === 'Point' ?
      this.translateCoordinate(event.target.a) :
      this.mode === 'LineString' ?
      event.target.a.map(obj => this.translateCoordinate(obj)) :
      this.mode === 'Polygon' ?
      event.target.a.map(obj => obj.map(coors => this.translateCoordinate(coors))) :
      [];

    const targetVectorLayer = _.find(this.vectors, (obj) => obj.isSelect === true);
    const tmp = targetVectorLayer.contents;

    tmp.push(
      {
        type: this.mode,
        coordinates
      }
    );

    this.vectorLayerService.update(targetVectorLayer.id, {
      contents: tmp
    });

  }

  undo() {
    if (this.undoStack.length <= 0) { return; }
    const targetVectorLayer = _.find(this.vectors, (obj) => obj.isSelect === true);
    const tmp = _.cloneDeep(targetVectorLayer.contents);

    this.redoStack.unshift(tmp);

    const data = this.undoStack.shift();
    this.vectorLayerService.update(targetVectorLayer.id, {
      contents: data
    });
  }

  redo() {
    if (this.redoStack.length <= 0) { return; }
    const targetVectorLayer = _.find(this.vectors, (obj) => obj.isSelect === true);
    const tmp = _.cloneDeep(targetVectorLayer.contents);

    this.undoStack.unshift(tmp);

    const data = this.redoStack.shift();
    this.vectorLayerService.update(targetVectorLayer.id, {
      contents: data
    });
  }

  translateEnd(event: any, id: ID, index: number) {
    console.log('物体の移動', event, this.translateCoordinate(event.coordinate), id, index);
    if (this.mode !== 'hand') {
      return;
    }

    const targetVectorLayer = _.find(this.vectors, (obj) => obj.isSelect === true);
    const tmp = _.cloneDeep(targetVectorLayer.contents);

    this.redoStack = [];
    this.undoStack.unshift(tmp);

    const preview = _.cloneDeep(this.vectorLayerQuery.getEntity(id));
    preview.contents[index].coordinates = this.translateCoordinate(event.coordinate);
    console.log(preview);
    this.vectorLayerService.update(id, {
      contents: preview.contents
    });
  }

  isExistActiveVectorLayer() {
    return _.some(this.vectors, (obj) => obj.isSelect === true);
  }

  returnCollection(feature: any) {
    return new ol.Collection([feature]);
  }

  setFeatureProperty(feature: any) {
    console.log(feature);
  }

}
