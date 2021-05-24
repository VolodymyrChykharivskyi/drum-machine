import { Injectable } from '@angular/core';
import { Howl } from 'howler';

/** Configs */
import { DrumMachineConfig } from '../../configs/drum-machine.config';

/** Interfaces */
import { Stave } from '../../interfaces/stave.interface';

@Injectable()
export class DrumMachineService {
	private _staves: Stave[];
	private _activePosition = 0;

	private timerId: number;

	public playing = false;

	public bpm = DrumMachineConfig.bpmValue.initial;

	public get activePosition(): number {
		return this._activePosition;
	}

	public set activePosition(position: number) {
		this._activePosition = position;
	}

	public get staves(): Stave[] {
		return this._staves;
	}

	public set staves(staves: Stave[]) {
		this._staves = staves;
	}

	public incrementActivePosition(num: number = 1): void {
		this.activePosition = this.activePosition + num;
	}

	public setTimer(): void {
		this.timerId = setInterval(
			() => this.tick(),
			this.calculateTempo(this.bpm)
		);
	}

	public calculateTempo(bpm: number): number {
		return 60000 / bpm;
	}

	private tick(): void {
		this.incrementActivePosition();

		if (this.activePosition === DrumMachineConfig.countPosition) {
			this.activePosition = 0;
		}

		this.checkNote();
	}

	private checkNote(): void {
		for (const stave of this.staves) {
			for (const note of stave.notes) {
				if (note.active && note.pos === this.activePosition) {
					this.playSample(stave.sample);
				}
			}
		}
	}

	private playSample(sample: string): void {
		const sound = new Howl({
			src: [sample],
		});
		sound.play();
	}

	public togglePlay(): void {
		this.togglePlayValue();

		if (this.playing) {
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

		if (this.playing) {
			clearInterval(this.timerId);

			this.setTimer();
		}
	}

	public togglePlayValue(): void {
		this.playing = !this.playing;
	}
}
