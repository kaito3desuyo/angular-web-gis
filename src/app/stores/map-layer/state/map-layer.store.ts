import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { MapLayer } from './map-layer.model';
import { Injectable } from '@angular/core';

export interface MapLayerState extends EntityState<MapLayer> {}

@StoreConfig({ name: 'map-layer' })
@Injectable({
  providedIn: 'root'
})
export class MapLayerStore extends EntityStore<MapLayerState, MapLayer> {

  constructor() {
    super();
  }

}

export const mapLayerStore = new MapLayerStore();

