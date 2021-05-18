import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

/** Configs */
import { DrumMachineConfig } from '../../configs/drum-machine.config';

/** Services */
import { LocalStorageService } from 'src/app/modules/core/services';
import { StavesService } from '../../services';

/** Interfaces */
import { Stave } from '../../interfaces/stave.interface';

@Component({
	selector: 'staves',
	templateUrl: './staves.component.html',
	styleUrls: ['./staves.component.scss'],
})
export class StavesComponent implements OnInit {
	public staves: Stave[];

	constructor(
		private StavesService: StavesService,
		private LocalStorageService: LocalStorageService
	) {}

	public ngOnInit(): void {
		this.staves = this.StavesService.getStaves();
	}

	public drop(event: CdkDragDrop<string[]>): void {
		moveItemInArray(this.staves, event.previousIndex, event.currentIndex);
		this.LocalStorageService.setItem(
			DrumMachineConfig.localStorageName,
			JSON.stringify(this.staves)
		);
	}
}
