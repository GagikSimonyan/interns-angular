import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iintern } from './main.component';
import { Subject } from 'rxjs';

@Injectable()
export class InternService {
  
  private readonly BASE_URL: string = 'http://localhost:3000/interns/';
  addIntern$ = new Subject<Iintern>();
  updateIntern$ = new Subject<Iintern>();

  constructor(private http: HttpClient) {}

  deleteIntern(id: number) {
    return this.http.delete(`${this.BASE_URL + id}`);
  }

  addIntern(intern: Iintern) {
    const request = this.http.post(this.BASE_URL, intern);
    request.subscribe((intern) => {
      this.addIntern$.next(<Iintern>intern);
    });
    return request;
  }

  updateIntern(intern: Iintern) {
    const request = this.http.put(`${this.BASE_URL}${intern.id}`, intern);
    request.subscribe((intern) => {
      this.updateIntern$.next(<Iintern>intern)
    });
    return request;
  }

  getAllInterns() {
    return this.http.get<Iintern[]>(this.BASE_URL);
  }
}
