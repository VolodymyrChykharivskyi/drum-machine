import { Component, OnInit, AfterContentChecked } from '@angular/core';

/** Configs */
import { DrumMachineConfig } from '../../configs/drum-machine.config';

/** Services */
import { LocalStorageService } from 'src/app/modules/core/services';
import { StavesService, DrumMachineService } from '../../services';

@Component({
	selector: 'dram-machine',
	templateUrl: './dram-machine.component.html',
	styleUrls: ['./dram-machine.component.scss'],
})
export class DramMachineComponent implements OnInit, AfterContentChecked {
	constructor(
		private StavesService: StavesService,
		private LocalStorageService: LocalStorageService,
		private DrumMachineService: DrumMachineService
	) {}

	public ngOnInit(): void {
		this.StavesService.initStaves();

		this.DrumMachineService.staves = this.StavesService.getStaves();
	}

	public ngAfterContentChecked(): void {
		this.LocalStorageService.setItem(
			DrumMachineConfig.localStorageName,
			JSON.stringify(this.DrumMachineService.staves)
		);
	}
}
