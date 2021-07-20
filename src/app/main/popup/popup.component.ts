import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { InternService } from '../intern.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @ViewChild('name') name!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('surname') surname!: ElementRef;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(private internService: InternService) {}

  ngOnInit(): void {}

  closePopUp() {
    console.log('closePopUp');
    this.newItemEvent.emit(false);
  }

  addIntern() {
    const name = this.name.nativeElement.value;
    const email = this.email.nativeElement.value;
    const surname = this.surname.nativeElement.value;
    this.internService
      .addIntern({ name, email, surname })
      .subscribe((intern) => {
        this.closePopUp();
      });
  }
}
