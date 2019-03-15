import { Component, OnInit, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';
import { VectorLayer } from 'src/app/stores/vector-layer/state';
import * as _ from 'lodash';
@Component({
  selector: 'app-map-mode-button',
  templateUrl: './map-mode-button.component.html',
  styleUrls: ['./map-mode-button.component.scss']
})
export class MapModeButtonComponent implements OnInit {

  mode: string = null;

  @Input() disabled = false;

  @Output() selectedType: EventEmitter<string> = new EventEmitter<string>();
  @Output() undo: EventEmitter<never> = new EventEmitter<never>();
  @Output() redo: EventEmitter<never> = new EventEmitter<never>();

  constructor() { }

  ngOnInit() {

  }

  toggleMode(mode: string) {

    if (this.disabled) {
      return;
    }

    this.mode = this.mode === mode ? null : mode;
    this.selectedType.emit(this.mode);
  }

  clickUndo() {
    console.log('undo');
    this.undo.emit();
  }

  clickRedo() {
    console.log('redo');
    this.redo.emit();
  }

}
