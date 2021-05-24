import { Component } from '@angular/core';

/** Configs */
import { DrumMachineConfig } from '../../configs/drum-machine.config';

/** Services */
import { DrumMachineService } from '../../services';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent {
	public readonly DrumMachineConfig = DrumMachineConfig;

	constructor(public DrumMachineService: DrumMachineService, private translate: TranslateService) {}

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
		return this.DrumMachineService.playing ? this.translate.instant('stop') : this.translate.instant('play');
	}

	public getIcon(): string {
		return this.DrumMachineService.playing ? 'stop-fill' : 'play-fill';
	}
}
