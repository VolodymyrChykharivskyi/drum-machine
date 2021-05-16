import { Injectable } from '@angular/core';

@Injectable()
export class DrumMachineService {
	private _activePosition = 0;
	public playing = false;

	public get activePosition(): number {
		return this._activePosition;
	}

	public set activePosition(position: number) {
		this._activePosition = position;
	}

	constructor() {}

	public incrementActivePosition(num: number = 1): void {
		this.activePosition = this.activePosition + num;
	}

	public togglePlay(): void {
		this.playing = !this.playing;
	}
}
