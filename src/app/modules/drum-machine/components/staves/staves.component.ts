import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

/** Services */
import { StavesService } from '../../services/staves.service';

/** Interfaces */
import { Stave } from '../../interfaces/stave.interface';

@Component({
  selector: 'staves',
  templateUrl: './staves.component.html',
  styleUrls: ['./staves.component.scss'],
})
export class StavesComponent implements OnInit {
  public staves: Stave[];

  constructor(private StavesService: StavesService) {}

  public ngOnInit(): void {
    this.getStaves();
  }

  private getStaves(): void {
    this.staves = this.StavesService.getStaves();
  }

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.staves, event.previousIndex, event.currentIndex);
  }
}
