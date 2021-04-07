import { Component, Input } from '@angular/core';

import { DrumMachineConfig } from '../../configs/drum-machine.config';

@Component({
  selector: 'transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss'],
})
export class TransportComponent {
  @Input() position: number;

  public readonly DrumMachineConfig = DrumMachineConfig;
}
