import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Howl } from 'howler';

/** Configs */
import { DrumMachineConfig } from '../../configs/drum-machine.config';

/** Services */
import { StavesService } from '../../services';
import { LocalStorageService } from 'src/app/modules/core/services';

/** Interfaces */
import { Stave } from '../../interfaces/stave.interface';

@Component({
  selector: 'dram-machine',
  templateUrl: './dram-machine.component.html',
  styleUrls: ['./dram-machine.component.scss'],
})
export class DramMachineComponent implements OnInit, AfterContentChecked {
  public activePosition = 0;
  public playing = false;
  public bpm = DrumMachineConfig.bpmValue.initial;
  private timerId: number;
  private staves: Stave[];

  constructor(
    private StavesService: StavesService,
    private LocalStorageService: LocalStorageService
  ) {}

  public ngOnInit(): void {
    this.StavesService.initStaves();
    this.setStaves();

    for (const stave of this.staves) {
      const localStorageRef = this.LocalStorageService.getItem(
        `ag-pattern-${stave.id}`
      );

      if (localStorageRef) {
        stave.notes = JSON.parse(localStorageRef);
      }
    }
  }

  public ngAfterContentChecked(): void {
    for (const stave of this.staves) {
      this.LocalStorageService.setItem(
        `ag-pattern-${stave.id}`,
        JSON.stringify(stave.notes)
      );
    }
  }

  public setStaves(): void {
    this.staves = this.StavesService.getStaves();
  }

  public setTimer(): void {
    this.timerId = setInterval(
      () => this.tick(),
      this.calculateTempo(this.bpm)
    );
  }

  public tick(): void {
    this.activePosition++;
    if (this.activePosition === DrumMachineConfig.countPosition) {
      this.activePosition = 0;
    }

    this.checkNote();
  }

  public checkNote(): void {
    for (const stave of this.staves) {
      for (const note of stave.notes) {
        if (note.active && note.pos === this.activePosition) {
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
    this.playing = !this.playing;

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
}
