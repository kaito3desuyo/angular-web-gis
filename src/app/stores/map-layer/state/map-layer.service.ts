import { ID } from '@datorama/akita';
import { MapLayerStore, mapLayerStore } from './map-layer.store';
import { MapLayer, createMapLayer } from './map-layer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapLayerService {

  constructor(private mapLayerStore: MapLayerStore) {
  }

  set(data: MapLayer[]) {
    this.mapLayerStore.set(data);
  }

  add(params: Partial<MapLayer>) {
    const mapLayer = createMapLayer(params);
    this.mapLayerStore.add(mapLayer);
  }

  delete(id: ID) {
    this.mapLayerStore.remove(id);
  }

  update(id: ID, params: Partial<MapLayer>) {
    this.mapLayerStore.update(id, params);
  }

}

export const mapLayerService = new MapLayerService(mapLayerStore);
