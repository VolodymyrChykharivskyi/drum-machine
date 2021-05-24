import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageService } from 'src/app/modules/core/services';
import { StavesService } from '../../services';

import { StavesComponent } from './staves.component';

describe('StavesComponent', () => {
	let component: StavesComponent;
	let fixture: ComponentFixture<StavesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			providers: [{ provide: StavesService, useValue: StavesService }, { provide: LocalStorageService, useValue: LocalStorageService }],
			declarations: [StavesComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StavesComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
