import { Component, OnInit } from '@angular/core';
import { InternService } from './intern.service';

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

  public interns: Iintern[] = [];

  constructor(private internService: InternService) {}

  ngOnInit(): void {
    this.internService.getAllInterns().subscribe((interns) => {
      this.interns = interns;
    });
    this.internService.addIntern$.subscribe((intern: Iintern) => {
      this.interns.push(intern);
    });
  }

  closeAddInternPopUp() {
    console.log('closeAddInternPopUp');
    this.showPopup = false;
  }
}
