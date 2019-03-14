import { ID } from '@datorama/akita';
import { mapLayerQuery } from './map-layer.query';
import * as uuid from 'uuid/v4';

export interface MapLayer {
  id: ID;
  name: string;
  url: string;
  opacity: number;
  visible: boolean;
}

export function createMapLayer(params: Partial<MapLayer>) {
  return {
    id: uuid(),
    opacity: 1,
    visible: true,
    ...params,
  } as MapLayer;
}
