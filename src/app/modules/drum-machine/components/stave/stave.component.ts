import { Component, Input } from '@angular/core';

@Component({
  selector: 'stave',
  templateUrl: './stave.component.html',
  styleUrls: ['./stave.component.scss'],
})
export class StaveComponent {
  @Input() name: string;
  @Input() notes: any[];

  public onClick(note): void {
    note.active = !note.active;
  }
}
