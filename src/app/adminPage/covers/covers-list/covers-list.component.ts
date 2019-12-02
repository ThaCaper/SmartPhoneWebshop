import { Component, OnInit } from '@angular/core';
import {Cover} from '../../../shared/models/cover';
import {CoverService} from '../../../shared/services/cover.service';


@Component({
  selector: 'app-covers-list',
  templateUrl: './covers-list.component.html',
  styleUrls: ['./covers-list.component.css']
})
export class CoversListComponent implements OnInit {
  covers: Cover[];
  loading: boolean;
  constructor(private coverService: CoverService) { }

  ngOnInit() {
    this.coverService.getCovers()
      .subscribe(cover => {
        this.covers = cover;
      });
  }

  refresh() {
    this.loading = true;
    this.coverService.getCovers()
      .subscribe(cover => {
      this.covers = cover;
    });
  }

  delete(id: number) {
    this.coverService.deleteCover(id)
      .subscribe(message => {
        this.refresh();
      });
  }

}
