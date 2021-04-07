import { Injectable } from '@angular/core';

/** Configs */
import { DrumMachineConfig } from '../configs/drum-machine.config';

@Injectable()
export class StavesService {
  private staves = [];

  public getStaves(): any {
    return this.staves;
  }

  public initStaves(): void {
    this.staves = DrumMachineConfig.soundsName.map(
      (item: string, index: number) => ({
        id: index,
        name: item,
        sample: `${DrumMachineConfig.audioPath}${item}.mp3`,
        notes: this.generateNotes(),
      })
    );
  }

  private generateNotes(): any {
    const notes = [];

    for (let i = 0; i < 8; i++) {
      notes.push({ pos: i, active: false });
    }

    return notes;
  }
}
