import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array',
})
export class ArrayPipe implements PipeTransform {
  transform(length: number): number[] {
    return Array.from({ length }, (value, index: number) => index);
  }
}
