import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Iintern } from '../main.component';
import { InternService } from '../intern.service';

@Component({
  selector: '[app-intern-item]',
  templateUrl: './intern-item.component.html',
  styleUrls: ['./intern-item.component.scss'],
})
export class InternItemComponent implements OnInit {
  @Input() intern!: Iintern;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('surname') surname!: ElementRef;

  public showPopup: boolean = false;

  constructor(private internService: InternService) {}

  ngOnInit(): void {}

  removeIntern(intern: Iintern) {
    this.internService.deleteIntern(intern.id || 0).subscribe(() => {
      
    })
  }

  updateIntern(intern: Iintern) {
    this.internService.updateIntern(intern).subscribe(() => {
      
    })
  }

  closeEditInternPopUp() {
    this.showPopup = false;
  }
}
