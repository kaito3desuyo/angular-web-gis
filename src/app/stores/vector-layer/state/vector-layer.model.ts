import { ID } from '@datorama/akita';
import * as uuid from 'uuid/v4';
import { coordinate } from 'openlayers';

export interface VectorLayer {
  id: ID;
  name: string;
  opacity: number;
  visible: boolean;
  isSelect: boolean;
  contents: {
    type: 'Point' | 'LineString' | 'Polygon',
    coordinates: [number, number][]
  }[];
}

export function createVectorLayer(params: Partial<VectorLayer>) {
  return {
    id: uuid(),
    opacity: 1,
    visible: true,
    isSelect: false,
    contents: [],
    ...params
  } as VectorLayer;
}
