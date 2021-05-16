import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Howl } from 'howler';

/** Configs */
import { DrumMachineConfig } from '../../configs/drum-machine.config';

/** Services */
import { StavesService, DrumMachineService } from '../../services';
import { LocalStorageService } from 'src/app/modules/core/services';

/** Interfaces */
import { Stave } from '../../interfaces/stave.interface';

@Component({
	selector: 'dram-machine',
	templateUrl: './dram-machine.component.html',
	styleUrls: ['./dram-machine.component.scss'],
})
export class DramMachineComponent implements OnInit, AfterContentChecked {
	public bpm = DrumMachineConfig.bpmValue.initial;
	private timerId: number;
	private staves: Stave[];

	constructor(
		private StavesService: StavesService,
		private LocalStorageService: LocalStorageService,
		private DrumMachineService: DrumMachineService
	) {}

	public ngOnInit(): void {
		this.StavesService.initStaves();

		this.staves = this.StavesService.getStaves();
	}

	public ngAfterContentChecked(): void {
		this.LocalStorageService.setItem(
			DrumMachineConfig.localStorageName,
			JSON.stringify(this.staves)
		);
	}

	public setTimer(): void {
		this.timerId = setInterval(
			() => this.tick(),
			this.calculateTempo(this.bpm)
		);
	}

	public tick(): void {
		this.DrumMachineService.incrementActivePosition();

		if (
			this.DrumMachineService.activePosition === DrumMachineConfig.countPosition
		) {
			this.DrumMachineService.activePosition = 0;
		}

		this.checkNote();
	}

	public checkNote(): void {
		for (const stave of this.staves) {
			for (const note of stave.notes) {
				if (
					note.active &&
					note.pos === this.DrumMachineService.activePosition
				) {
					this.playSample(stave.sample);
				}
			}
		}
	}

	public playSample(sample: string): void {
		const sound = new Howl({
			src: [sample],
		});
		sound.play();
	}

	public calculateTempo(bpm: number): number {
		return 60000 / bpm;
	}

	public togglePlay(): void {
		this.DrumMachineService.togglePlay();

		if (this.DrumMachineService.playing) {
			this.setTimer();

			return;
		}

		clearInterval(this.timerId);
	}

	public clearPattern(): void {
		for (const stave of this.staves) {
			for (const note of stave.notes) {
				note.active = false;
			}
		}
	}

	public updateBpm(bpm: number): void {
		this.bpm = bpm;

		if (this.DrumMachineService.playing) {
			clearInterval(this.timerId);

			this.setTimer();
		}
	}
}
