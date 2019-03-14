import { QueryEntity } from '@datorama/akita';
import { MapLayerStore, MapLayerState, mapLayerStore } from './map-layer.store';
import { MapLayer } from './map-layer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapLayerQuery extends QueryEntity<MapLayerState, MapLayer> {

  constructor(protected store: MapLayerStore) {
    super(store);
    console.log(store);
  }

}

export const mapLayerQuery = new MapLayerQuery(mapLayerStore);
