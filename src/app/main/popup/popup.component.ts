import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { InternService } from '../intern.service';
import { Iintern } from '../main.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() editableIntern!: Iintern;
  isEditableMode: boolean = false;
  public intern: Iintern = {
    name: '',
    email: '',
    surname: '',
  };

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(private internService: InternService) {}

  ngOnInit(): void {
    if (this.editableIntern) {
      this.intern = this.editableIntern;
      this.isEditableMode = true;
    }
  }

  closePopUp() {
    this.newItemEvent.emit(false);
  }

  saveIntern() {
    if (this.isEditableMode) {
      this.internService.updateIntern(this.intern).subscribe(() => {
        this.closePopUp();
      });
    } else {
      this.internService.addIntern(this.intern).subscribe((intern) => {
        this.closePopUp();
      });
    }
  }
}
