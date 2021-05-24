import { TestBed } from '@angular/core/testing';

import { StavesService } from './staves.service';

describe('StavesService', () => {
	let service: StavesService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [{ provide: StavesService, useValue: StavesService }],
		});
		service = TestBed.inject(StavesService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
