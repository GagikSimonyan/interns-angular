import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Iintern } from '../views/main/main.component';

@Injectable()
export class InternService {
  private readonly BASE_URL: string = 'http://localhost:3000/interns/';

  intern$ = new Subject<Array<Iintern>>();
  interns!: Array<Iintern>;

  constructor(private http: HttpClient) {}

  getAllInterns() {
    const request = this.http.get<Iintern[]>(this.BASE_URL);
    request.subscribe((interns: Array<Iintern>) => {
      this.interns = interns;
      this.intern$.next(this.interns);
    });
    return request;
  }

  addIntern(intern: Iintern) {
    const request = this.http.post<Iintern>(this.BASE_URL, intern);
    request.subscribe((intern) => {
      this.interns.push(intern);
      this.intern$.next(this.interns);
    });
    return request;
  }

  updateIntern(intern: Iintern) {
    const request = this.http.put<Iintern>(
      `${this.BASE_URL}${intern.id}`,
      intern
    );
    request.subscribe((intern: Iintern) => {
      const index = this.interns.findIndex((item) => item.id === intern.id);
      this.interns[index] = intern;
      this.intern$.next(this.interns);
    });
    return request;
  }

  deleteIntern(id: number) {
    const request = this.http.delete(`${this.BASE_URL + id}`);
    request.subscribe(() => {
      this.interns = this.interns.filter((item) => item.id !== id);
      this.intern$.next(this.interns);
    });
    return request;
  }

  getInternsBySearch(interns: Array<Iintern>, searchValue: string) {
    const searchedInterns = interns.filter(
      (intern) =>
        intern.name.toLowerCase().startsWith(searchValue.toLowerCase()) ||
        intern.surname.toLowerCase().startsWith(searchValue.toLowerCase())
    );
    return searchedInterns;
  }
}
