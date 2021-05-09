import { Injectable } from '@angular/core';

/** Configs */
import { DrumMachineConfig } from '../configs/drum-machine.config';

/** Interfaces */
import { Note } from '../interfaces/note.interface';
import { Stave } from '../interfaces/stave.interface';

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
        name: item,
        sample: `${DrumMachineConfig.audioPath}${item}.mp3`,
        notes: this.generateNotes(),
      })
    );
  }

  private generateNotes(): Note[] {
    const notes: Note[] = [];

    for (let i = 0; i < DrumMachineConfig.countPosition; i++) {
      notes.push({ pos: i, active: false });
    }

    return notes;
  }
}
