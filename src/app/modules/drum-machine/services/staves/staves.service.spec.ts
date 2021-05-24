import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from 'src/app/modules/core/services';
import { StavesService } from './staves.service';

describe('StavesService', () => {
	let service: StavesService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: StavesService, useValue: StavesService },
				{ provide: LocalStorageService, useValue: LocalStorageService },
			],
		});
		service = new StavesService(new LocalStorageService());
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return name Hi hat closed', () => {
		expect(service.transformName('hi_hat_closed')).toBe('Hi hat closed');
	});
});
