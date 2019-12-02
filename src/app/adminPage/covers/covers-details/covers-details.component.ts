import { Component, OnInit } from '@angular/core';
import {Cover} from '../../../shared/models/cover';
import {ActivatedRoute, Route} from '@angular/router';
import {CoverService} from '../../../shared/services/cover.service';

@Component({
  selector: 'app-covers-details',
  templateUrl: './covers-details.component.html',
  styleUrls: ['./covers-details.component.css']
})
export class CoversDetailsComponent implements OnInit {
  cover: Cover;
  constructor(private route: ActivatedRoute,
              private coverService: CoverService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.coverService.getCoverById(id)
      .subscribe(coverFromRest => {
        this.cover = coverFromRest;
      });
  }

}
