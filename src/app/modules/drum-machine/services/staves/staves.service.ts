import { Injectable } from '@angular/core';

/** Pipes */
import { ArrayPipe } from 'src/app/modules/core/pipes/array.pipe';

/** Configs */
import { DrumMachineConfig } from '../../configs/drum-machine.config';

/** Interfaces */
import { Note } from '../../interfaces/note.interface';
import { Stave } from '../../interfaces/stave.interface';

@Injectable()
export class StavesService {
	private staves: Stave[] = [];

	public getStaves(): Stave[] {
		return this.staves;
	}

	public initStaves(): void {
		this.staves = DrumMachineConfig.soundsName.map(
			(item: string, index: number): Stave => ({
				id: index,
				name: this.transformName(item),
				sample: `${DrumMachineConfig.audioPath}${item}.mp3`,
				notes: this.generateNotes(),
			})
		);
	}

	private generateNotes(): Note[] {
		const arrayPipe = new ArrayPipe();
		const arr = arrayPipe.transform(DrumMachineConfig.countPosition);

		return arr.map((value: number, idx: number) => ({
			pos: idx,
			active: false,
		}));
	}

	private transformName(name: string): string {
		return (name[0].toUpperCase() + name.slice(1)).split('_').join(' ');
	}
}
