import { QueryEntity } from '@datorama/akita';
import { VectorLayerStore, VectorLayerState, vectorLayerStore } from './vector-layer.store';
import { VectorLayer } from './vector-layer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VectorLayerQuery extends QueryEntity<VectorLayerState, VectorLayer> {

  constructor(protected store: VectorLayerStore) {
    super(store);
  }

}

export const vectorLayerQuery = new VectorLayerQuery(vectorLayerStore);
