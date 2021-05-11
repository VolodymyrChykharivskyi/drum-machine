import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() text: string;
  @Input() icon?: string;
  @Input() setClass?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
