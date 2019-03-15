import { Component, OnInit, Input } from '@angular/core';
import { customAnimations } from 'src/app/animations';
import { MatDialog } from '@angular/material/dialog';
import { MapLayerAddDialogComponent } from '../map-layer-add-dialog/map-layer-add-dialog.component';
import { MapLayerService, MapLayerQuery, MapLayer } from 'src/app/stores/map-layer/state';
import { ID } from '@datorama/akita';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { VectorLayer, VectorLayerQuery, VectorLayerService } from 'src/app/stores/vector-layer/state';
import { VectorLayerAddDialogComponent } from '../vector-layer-add-dialog/vector-layer-add-dialog.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-map-layer-toolbar',
  templateUrl: './map-layer-toolbar.component.html',
  styleUrls: ['./map-layer-toolbar.component.scss'],
  animations: customAnimations
})
export class MapLayerToolbarComponent implements OnInit {

  layerMenuState = false;
  vectorMenuState = false;
  @Input() maps: MapLayer[] = [];
  @Input() vectors: VectorLayer[] = [];

  constructor(
    private dialog: MatDialog,
    private mapLayerQuery: MapLayerQuery,
    private mapLayerService: MapLayerService,
    private vectorLayerQuery: VectorLayerQuery,
    private vectorLayerService: VectorLayerService
  ) { }

  ngOnInit() {
  }

  dropMapLayer(event: CdkDragDrop<MapLayer[]>) {
    moveItemInArray(this.maps, event.previousIndex, event.currentIndex);
    console.log('ドラッグアンドドロップ', this.maps);
    this.mapLayerService.set(this.maps);
  }

  dropVectorLayer(event: CdkDragDrop<VectorLayer[]>) {
    moveItemInArray(this.vectors, event.previousIndex, event.currentIndex);
    console.log('ドラッグアンドドロップ', this.vectors);
    this.vectorLayerService.set(this.vectors);
  }

  onClickAddMapLayer() {
    console.log('レイヤー追加ダイアログを開く');
    const dialogRef = this.dialog.open(MapLayerAddDialogComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: Partial<MapLayer> | undefined) => {
      console.log('レイヤー追加ダイアログを閉じる', result);
      if (result) {
        this.mapLayerService.set(this.maps);
        this.mapLayerService.add({
          ...result,
          opacity: 1,
          visible: true
        });
        this.maps = this.mapLayerQuery.getAll();
      }
    });
  }

  onClickAddVectorLayer() {
    console.log('レイヤー追加ダイアログを開く');
    const dialogRef = this.dialog.open(VectorLayerAddDialogComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: Partial<MapLayer> | undefined) => {
      console.log('レイヤー追加ダイアログを閉じる', result);
      if (result) {
        this.vectorLayerService.set(this.vectors);
        this.vectorLayerService.add({
          ...result,
          opacity: 1,
          visible: true
        });
        this.vectors = _.cloneDeep(this.vectorLayerQuery.getAll());
        this.toggleSelect(this.vectors[this.vectors.length - 1]);
      }
    });
  }

  onClickDeleteMapLayer(id: ID) {
    console.log('レイヤー削除', id);
    this.mapLayerService.set(this.maps);
    this.mapLayerService.delete(id);
    this.maps = this.mapLayerQuery.getAll();
  }

  onClickDeleteVectorLayer(id: ID) {
    console.log('レイヤー削除', id);
    this.vectorLayerService.set(this.vectors);
    this.vectorLayerService.delete(id);
    this.vectors = this.vectorLayerQuery.getAll();
  }

  toggleSelect(vectorLayer: VectorLayer) {
    console.log(vectorLayer);
    vectorLayer.isSelect = !vectorLayer.isSelect;
    this.vectors.forEach(obj => {
      if (obj.id !== vectorLayer.id) {
        obj.isSelect = false;
      }
    });
    this.vectorLayerService.set(this.vectors);
  }

}
