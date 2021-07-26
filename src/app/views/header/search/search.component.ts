import { Component, OnInit } from '@angular/core';
import { InternService } from 'src/app/service/intern.service';
import { Iintern } from '../../main/main.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public search: string = '';

  constructor(private internService: InternService) { }

  ngOnInit(): void {

  }

  showInternsBySearchValue() {
    if (this.search.trim()) {
      this.internService.getInternsBySearch(this.search)
    }
  }

}
