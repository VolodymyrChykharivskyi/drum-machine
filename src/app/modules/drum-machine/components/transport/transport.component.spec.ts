import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumMachineService } from '../../services';

import { TransportComponent } from './transport.component';

import { ArrayPipe } from '../../../core/pipes/array.pipe';

describe('TransportComponent', () => {
	let component: TransportComponent;
	let fixture: ComponentFixture<TransportComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			providers: [
				{ provide: DrumMachineService, useValue: DrumMachineService },
			],
			declarations: [TransportComponent, ArrayPipe],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TransportComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
