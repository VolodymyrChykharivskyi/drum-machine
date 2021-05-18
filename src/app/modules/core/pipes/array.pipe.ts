import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'array',
})
export class ArrayPipe implements PipeTransform {
	/**
	 * @desc Generate an array of numbers
	 * @example 4 | array => [0, 1, 2, 3]
	 */
	transform(length: number): number[] {
		return Array.from({ length }, (value, index: number) => index);
	}
}
