import { Component, OnInit, Input } from '@angular/core';
import { customAnimations } from 'src/app/animations';
import { MatDialog } from '@angular/material/dialog';
import { MapLayerAddDialogComponent } from '../map-layer-add-dialog/map-layer-add-dialog.component';
import { MapLayerService, MapLayerQuery, MapLayer } from 'src/app/stores/map-layer/state';
import { ID } from '@datorama/akita';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-map-layer-toolbar',
  templateUrl: './map-layer-toolbar.component.html',
  styleUrls: ['./map-layer-toolbar.component.scss'],
  animations: customAnimations
})
export class MapLayerToolbarComponent implements OnInit {

  layerMenuState = false;
  @Input() maps: MapLayer[] = [];

  constructor(
    private dialog: MatDialog,
    private mapLayerQuery: MapLayerQuery,
    private mapLayerService: MapLayerService
  ) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<MapLayer[]>) {
    moveItemInArray(this.maps, event.previousIndex, event.currentIndex);
    console.log('ドラッグアンドドロップ', this.maps);
    this.mapLayerService.set(this.maps);
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

  onClickDeleteLayer(id: ID) {
    console.log('レイヤー削除', id);
    this.mapLayerService.set(this.maps);
    this.mapLayerService.delete(id);
    this.maps = this.mapLayerQuery.getAll();
  }

}
