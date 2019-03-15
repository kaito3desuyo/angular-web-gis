import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { VectorLayer } from './vector-layer.model';
import { Injectable } from '@angular/core';

export interface VectorLayerState extends EntityState<VectorLayer> {}

@StoreConfig({ name: 'vector-layer' })
@Injectable({
  providedIn: 'root'
})
export class VectorLayerStore extends EntityStore<VectorLayerState, VectorLayer> {

  constructor() {
    super();
  }

}

export const vectorLayerStore = new VectorLayerStore();

