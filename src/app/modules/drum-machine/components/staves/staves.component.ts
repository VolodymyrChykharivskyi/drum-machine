import { Component, OnInit } from '@angular/core';

/** Services */
import { StavesService } from '../../services/staves.service';

@Component({
  selector: 'staves',
  templateUrl: './staves.component.html',
  styleUrls: ['./staves.component.scss'],
})
export class StavesComponent implements OnInit {
  public staves: any[];

  constructor(private StavesService: StavesService) {}

  public ngOnInit(): void {
    this.getStaves();
  }

  private getStaves(): void {
    this.staves = this.StavesService.getStaves();
  }
}
