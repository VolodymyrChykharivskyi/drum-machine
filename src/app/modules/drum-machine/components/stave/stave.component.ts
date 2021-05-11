import { Component, Input } from '@angular/core';

/** Interfaces */
import { Note } from '../../interfaces/note.interface';

@Component({
	selector: 'stave',
	templateUrl: './stave.component.html',
	styleUrls: ['./stave.component.scss'],
})
export class StaveComponent {
	@Input() name: string;
	@Input() notes: Note[];

	public onClick(note: Note): void {
		note.active = !note.active;
	}
}
