import { Component, OnInit, ViewChild, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { customAnimations } from 'src/app/animations';
import { ViewComponent, ControlZoomComponent } from 'ngx-openlayers';

@Component({
  selector: 'app-openlayers-page',
  templateUrl: './openlayers-page.component.html',
  styleUrls: ['./openlayers-page.component.scss'],
  animations: customAnimations
})
export class OpenlayersPageComponent implements OnInit {

  zoom = 10;

  maps = [
    {
      name: '国土地理院　標準地図',
      url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
      opacity: 1,
      visible: true
    },
    {
      name: '国土地理院　陰影起伏図',
      url: 'https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png',
      opacity: 0.5,
      visible: true
    }
  ];

  @ViewChild(ViewComponent) view: ViewComponent;

  constructor() { }

  ngOnInit() {

  }

}
