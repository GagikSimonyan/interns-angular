import { Pipe, PipeTransform } from '@angular/core';
import { Iintern } from '../views/main/main.component';

@Pipe({
  name: 'searchIntern'
})
export class SearchPipe implements PipeTransform {

  transform(interns: Iintern[], search: ''): Iintern[] {
    if (!search.trim()) {
      return interns;
    }
    return interns.filter(intern => {
      return intern.name.toLowerCase().includes(search.toLowerCase()) || intern.surname.toLowerCase().includes(search.toLowerCase());
    });;
  }

}
