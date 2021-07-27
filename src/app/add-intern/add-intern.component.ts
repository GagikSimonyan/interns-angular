import { Component, OnInit } from '@angular/core';
import { Iintern } from '../views/main/main.component';
import { InternService } from '../service/intern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.scss'],
})
export class AddInternComponent implements OnInit {
  public intern: Iintern = {
    name: '',
    email: '',
    surname: '',
  };
  constructor(private internService: InternService, private router: Router) {}

  ngOnInit(): void {}

  public saveIntern() {
    this.internService.addIntern(this.intern).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
