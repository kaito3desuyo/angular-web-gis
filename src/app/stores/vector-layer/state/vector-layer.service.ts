import { ID } from '@datorama/akita';
import { VectorLayerStore, vectorLayerStore } from './vector-layer.store';
import { Injectable } from '@angular/core';
import { VectorLayer, createVectorLayer } from './vector-layer.model';

@Injectable({
  providedIn: 'root'
})
export class VectorLayerService {

  constructor(private vectorLayerStore: VectorLayerStore) {
  }

  set(data: VectorLayer[]) {
    this.vectorLayerStore.set(data);
  }

  add(params: Partial<VectorLayer>) {
    const vectorLayer = createVectorLayer(params);
    this.vectorLayerStore.add(vectorLayer);
  }

  delete(id: ID) {
    this.vectorLayerStore.remove(id);
  }

  update(id: ID, params: Partial<VectorLayer>) {
    this.vectorLayerStore.update(id, params);
  }

}

export const vectorLayerService = new VectorLayerService(vectorLayerStore);
