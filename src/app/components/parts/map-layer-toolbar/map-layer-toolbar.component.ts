import { Component, OnInit, Input } from '@angular/core';
import { customAnimations } from 'src/app/animations';
import { MatDialog } from '@angular/material/dialog';
import { MapLayerAddDialogComponent } from '../map-layer-add-dialog/map-layer-add-dialog.component';
import { MapLayerService, MapLayerQuery, MapLayer } from 'src/app/stores/map-layer/state';
import { ID } from '@datorama/akita';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSliderChange } from '@angular/material/slider';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-map-layer-toolbar',
  templateUrl: './map-layer-toolbar.component.html',
  styleUrls: ['./map-layer-toolbar.component.scss'],
  animations: customAnimations
})
export class MapLayerToolbarComponent implements OnInit {

  layerMenuState = false;
  maps: MapLayer[] = [];

  constructor(
    private dialog: MatDialog,
    private mapLayerQuery: MapLayerQuery,
    private mapLayerService: MapLayerService
  ) { }

  ngOnInit() {
    this.maps = this.mapLayerQuery.getAll();
  }

  drop(event: CdkDragDrop<MapLayer[]>) {
    moveItemInArray(this.maps, event.previousIndex, event.currentIndex);
    console.log('ドラッグアンドドロップ', this.maps);
    this.mapLayerService.set(this.maps);
  }

  changeVisible(map: MapLayer, event: MatCheckboxChange) {
    console.log('表示／非表示変更', event, map);
    this.mapLayerService.update(map.id, {
      visible: event.checked,
    });
  }

  changeOpacity(map: MapLayer, event: MatSliderChange) {
    console.log('透過度変更', event, map);
    this.mapLayerService.update(map.id, {
      opacity: event.value,
    });
  }

  onClickAddLayer() {
    console.log('レイヤー追加ダイアログを開く');
    const dialogRef = this.dialog.open(MapLayerAddDialogComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: Partial<MapLayer> | undefined) => {
      console.log('レイヤー追加ダイアログを閉じる', result);
      if (result) {
        this.mapLayerService.add({
          ...result,
          opacity: 1,
          visible: true
        });
        this.maps = this.mapLayerQuery.getAll();
      }
    });
  }

  onClickDeleteLayer(id: ID) {
    console.log('レイヤー削除', id);
    this.mapLayerService.delete(id);
    this.maps = this.mapLayerQuery.getAll();
  }

}
