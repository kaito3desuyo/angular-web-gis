import { Component, OnInit, Input } from '@angular/core';
import { customAnimations } from 'src/app/animations';

@Component({
  selector: 'app-map-layer-toolbar',
  templateUrl: './map-layer-toolbar.component.html',
  styleUrls: ['./map-layer-toolbar.component.scss'],
  animations: customAnimations
})
export class MapLayerToolbarComponent implements OnInit {

  layerMenuState = false;
  @Input() maps: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
