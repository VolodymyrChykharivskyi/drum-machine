import { TestBed } from '@angular/core/testing';

import { DrumMachineService } from './drum-machine.service';

describe('DrumMachineService', () => {
	let service: DrumMachineService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [{ provide: DrumMachineService, useValue: DrumMachineService }],
		});
		service = TestBed.inject(DrumMachineService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
