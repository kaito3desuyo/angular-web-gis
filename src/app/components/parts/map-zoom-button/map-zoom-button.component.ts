import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-zoom-button',
  templateUrl: './map-zoom-button.component.html',
  styleUrls: ['./map-zoom-button.component.scss']
})
export class MapZoomButtonComponent implements OnInit {

  @Input() instance: any;

  constructor() { }

  ngOnInit() {
    console.log(this.instance);
  }

  zoomIn() {
    const zoom = this.instance.getZoom() + 1;
    this.instance.setZoom(zoom);
  }

  zoomOut() {
    const zoom = this.instance.getZoom() - 1;
    this.instance.setZoom(zoom);
  }

}
