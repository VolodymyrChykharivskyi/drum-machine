import { Note } from './note.interface';

export interface Stave {
	id: number;
	name: string;
	sample: string;
	notes: Note[];
}
