import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumMachineService, StavesService } from '../../services';
import { LocalStorageService } from '../../../core/services';

import { DramMachineComponent } from './dram-machine.component';

describe('DramMachineComponent', () => {
	let component: DramMachineComponent;
	let fixture: ComponentFixture<DramMachineComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			providers: [
				{ provide: DrumMachineService, useValue: DrumMachineService },
				{ provide: LocalStorageService, useValue: LocalStorageService },
				{ provide: StavesService, useValue: StavesService },
			],
			declarations: [DramMachineComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DramMachineComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
