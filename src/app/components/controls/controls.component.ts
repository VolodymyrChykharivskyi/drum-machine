import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  @Input() bpm: number;
  @Input() playing: boolean;

  @Output() togglePlay: EventEmitter<any> = new EventEmitter<any>();
  @Output() clearPattern: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateBpm: EventEmitter<any> = new EventEmitter<any>();

  toggle(): void {
    this.togglePlay.emit();
  }

  clear(): void {
    this.clearPattern.emit();
  }

  changeBpm(bpm: number): void {
    this.updateBpm.emit(bpm);
  }

}
