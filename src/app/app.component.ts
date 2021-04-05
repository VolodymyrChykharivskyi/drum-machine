import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { StavesService } from './services/staves.service';
import { Howl } from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentChecked {
  constructor(private StavesService: StavesService) {}

  public transportPos = 0;
  playing = false;
  bpm = 220;
  timerId: any;
  staves: any;

  public ngOnInit(): void {
    this.getStaves();
    for (const stave of this.staves) {
      const localStorageRef = localStorage.getItem('ag-pattern-' + stave.id);
      if (localStorageRef) {
        stave.notes = JSON.parse(localStorageRef);
      }
    }
  }

  public ngAfterContentChecked(): void {
    for (const stave of this.staves) {
      localStorage.setItem(
        'ag-pattern-' + stave.id,
        JSON.stringify(stave.notes)
      );
    }
  }

  getStaves(): void {
    this.staves = this.StavesService.getStaves();
  }

  setTimer(): void {
    this.timerId = setInterval(
      () => this.tick(),
      this.calculateTempo(this.bpm)
    );
  }

  tick(): void {
    this.transportPos++;
    if (this.transportPos > 7) {
      this.transportPos = 0;
    }
    this.checkNote();
  }

  checkNote(): void {
    for (const stave of this.staves) {
      for (const note of stave.notes) {
        if (note.active && note.pos === this.transportPos) {
          this.playSample(stave.sample);
        }
      }
    }
  }

  playSample(sample: string): void {
    const sound = new Howl({
      src: [sample],
    });
    sound.play();
  }

  calculateTempo(bpm: number): number {
    return 60000 / bpm;
  }

  togglePlay(): void {
    this.playing = !this.playing;
    if (this.playing) {
      this.setTimer();
    } else {
      clearInterval(this.timerId);
    }
  }

  clearPattern(): void {
    for (const stave of this.staves) {
      for (const note of stave.notes) {
        note.active = false;
      }
    }
  }

  updateBpm(bpm: number): void {
    this.bpm = bpm;
    if (this.playing) {
      clearInterval(this.timerId);
      this.setTimer();
    }
  }
}
