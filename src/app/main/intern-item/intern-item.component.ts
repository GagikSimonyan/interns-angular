import { Component, Input, OnInit } from '@angular/core';
import { Iintern } from '../main.component';

@Component({
  selector: '[app-intern-item]',
  templateUrl: './intern-item.component.html',
  styleUrls: ['./intern-item.component.scss']
})
export class InternItemComponent implements OnInit {

  @Input() intern!: Iintern;

  constructor() { }

  ngOnInit(): void {
  }


}
