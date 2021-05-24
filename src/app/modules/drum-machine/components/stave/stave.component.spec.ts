import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Note } from '../../interfaces/note.interface';

import { StaveComponent } from './stave.component';

describe('StaveComponent', () => {
	let component: StaveComponent;
	let fixture: ComponentFixture<StaveComponent>;
	let note: Note;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StaveComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StaveComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		note = {
			pos: 2,
			active: true,
		};
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should change active value', () => {
		component.onClick(note);

		expect(note.active).toBeFalsy();
	});
});
