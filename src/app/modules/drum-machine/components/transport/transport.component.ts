import { Component } from '@angular/core';

/** Configs */
import { DrumMachineConfig } from '../../configs/drum-machine.config';

import { DrumMachineService } from '../../services';

@Component({
	selector: 'transport',
	templateUrl: './transport.component.html',
	styleUrls: ['./transport.component.scss'],
})
export class TransportComponent {
	public readonly DrumMachineConfig = DrumMachineConfig;

	constructor(public DrumMachineService: DrumMachineService) {}
}
