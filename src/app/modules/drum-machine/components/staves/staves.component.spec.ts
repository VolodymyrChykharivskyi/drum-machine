import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StavesComponent } from './staves.component';

describe('StavesComponent', () => {
	let component: StavesComponent;
	let fixture: ComponentFixture<StavesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StavesComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StavesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
