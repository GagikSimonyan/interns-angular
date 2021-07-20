import { Component, Input, OnInit } from '@angular/core';
import { Iintern } from '../main.component';
import { InternService } from '../intern.service';

@Component({
  selector: '[app-intern-item]',
  templateUrl: './intern-item.component.html',
  styleUrls: ['./intern-item.component.scss'],
})
export class InternItemComponent implements OnInit {
  @Input() intern!: Iintern;

  constructor(private interService: InternService) {}

  ngOnInit(): void {}

  removeIntern(intern: Iintern) {
    this.interService.deleteIntern(intern.id || 0);
  }
}
