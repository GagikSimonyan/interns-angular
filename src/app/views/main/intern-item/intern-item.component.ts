import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { InternService } from 'src/app/service/intern.service';
import { Iintern } from '../main.component';

@Component({
  selector: '[app-intern-item]',
  templateUrl: './intern-item.component.html',
  styleUrls: ['./intern-item.component.scss'],
})
export class InternItemComponent implements OnInit {
  @Input() intern!: Iintern;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(private internService: InternService) {}

  ngOnInit(): void {}

  removeIntern(intern: Iintern) {
    if (intern.id) {
      this.internService.deleteIntern(intern.id);
    }
  }

  updateIntern(intern: Iintern) {
    this.internService.updateIntern(intern).subscribe(() => {});
  }
  showPopup() {
    this.newItemEvent.emit(true);
  }
}
