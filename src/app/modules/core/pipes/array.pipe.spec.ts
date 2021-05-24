import { ArrayPipe } from './array.pipe';

describe('ArrayPipe', () => {
	let pipe: ArrayPipe;

	beforeEach(() => {
		pipe = new ArrayPipe();
	});

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('create an instance', () => {
		expect(pipe.transform(5)).toEqual([0, 1, 2, 3, 4]);
	});
});
