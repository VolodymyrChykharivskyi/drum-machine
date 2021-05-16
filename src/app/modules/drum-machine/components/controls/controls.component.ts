import { Component } from '@angular/core';

/** Configs */
import { DrumMachineConfig } from '../../configs/drum-machine.config';

/** Services */
import { DrumMachineService } from '../../services';

@Component({
	selector: 'controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent {
	public readonly DrumMachineConfig = DrumMachineConfig;

	constructor(public DrumMachineService: DrumMachineService) {}

	public toggle(): void {
		this.DrumMachineService.togglePlay();
	}

	public clear(): void {
		this.DrumMachineService.clearPattern();
	}

	public changeBpm(bpm: number): void {
		this.DrumMachineService.updateBpm(bpm);
	}

	public getBtnText(): string {
		return this.DrumMachineService.playing ? 'Stop' : 'Play';
	}

	public getIcon(): string {
		return this.DrumMachineService.playing ? 'stop-fill' : 'play-fill';
	}
}
