import { Component, OnInit } from '@angular/core';
import { InternService } from 'src/app/service/intern.service';
import { Iintern } from '../../main/main.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public search: string = '';
  private allInterns!: Array<Iintern>;
  constructor(private internService: InternService) {}

  ngOnInit(): void {
    this.internService.intern$.subscribe((interns) => {
      this.allInterns = interns;
    });
  }

  showInternsBySearchValue() {
    if (this.search.trim()) {
      const interns = this.internService.getInternsBySearch(
        JSON.parse(JSON.stringify(this.internService.interns)),
        this.search
      );
      this.internService.intern$.next(interns);
    } else {
      this.internService.intern$.next(this.internService.interns);
    }
  }
}
