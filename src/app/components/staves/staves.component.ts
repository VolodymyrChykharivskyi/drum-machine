import { Component, OnInit } from '@angular/core';
import { StavesService } from '../../services/staves.service';

@Component({
  selector: 'app-staves',
  templateUrl: './staves.component.html',
  styleUrls: ['./staves.component.scss'],
})
export class StavesComponent implements OnInit {
  constructor(private StavesService: StavesService) {}

  staves: any[];

  public getStaves(): void {
    this.staves = this.StavesService.getStaves();
  }

  public ngOnInit(): void {
    this.getStaves();
  }
}
