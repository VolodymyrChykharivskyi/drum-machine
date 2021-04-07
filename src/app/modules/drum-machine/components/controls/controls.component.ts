import { Component, EventEmitter, Input, Output } from '@angular/core';

/** Configs */
import { DrumMachineConfig } from '../../configs/drum-machine.config';

@Component({
  selector: 'controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent {
  @Input() bpm: number;
  @Input() playing: boolean;

  @Output() togglePlay: EventEmitter<void> = new EventEmitter<void>();
  @Output() clearPattern: EventEmitter<void> = new EventEmitter<void>();
  @Output() updateBpm: EventEmitter<number> = new EventEmitter<number>();

  public readonly DrumMachineConfig = DrumMachineConfig;

  public toggle(): void {
    this.togglePlay.emit();
  }

  public clear(): void {
    this.clearPattern.emit();
  }

  public changeBpm(bpm: number): void {
    this.updateBpm.emit(bpm);
  }
}
