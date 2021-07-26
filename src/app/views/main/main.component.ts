import { Component, OnInit } from '@angular/core';
import { InternService } from 'src/app/service/intern.service';

export interface Iintern {
  id?: number;
  name: string;
  surname: string;
  email: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  
  public showPopup: boolean = false;
  public editableIntern!: Iintern;
  public interns: Iintern[] = [];

  constructor(private internService: InternService) {}

  ngOnInit(): void {
    this.internService.getAllInterns().subscribe((interns) => {
      this.interns = interns;
    });
    this.internService.intern$.subscribe((interns: Array<Iintern>) => {
      this.interns = interns;
    });
  }

  closeAddInternPopUp() {
    this.showPopup = false;
  }
  openAddInternPopUp(intern: Iintern) {
    this.editableIntern = { ...intern };
    this.showPopup = true;
  }
}
