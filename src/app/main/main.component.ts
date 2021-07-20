import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Iintern {
  id: number,
  name: string,
  surname: string,
  email: string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public showPopup: boolean = false;

  public interns: Iintern[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Iintern[]>('http://localhost:3000/interns/').subscribe(interns => {
      this.interns = interns;
    })
  }

  removeIntern(id:number) {
    this.http.delete(`http://localhost:3000/interns/${id}`).subscribe(() => {
      this.interns = this.interns.filter(intern => intern.id !== id);
    })
  }

}
