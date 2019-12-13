import { Component, OnInit } from '@angular/core';
import {Cover} from '../../../shared/models/cover';
import {ActivatedRoute, Route} from '@angular/router';
import {CoverService} from '../../../shared/services/cover.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-covers-details',
  templateUrl: './covers-details.component.html',
  styleUrls: ['./covers-details.component.css']
})
export class CoversDetailsComponent implements OnInit {
  cover: Cover;
  id: number;
  coverForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    Name: new FormControl({value: '', disabled: true}),
    TypeOfBrand: new FormControl({value: '', disabled: true}),
    TypeOfModel: new FormControl({value: '', disabled: true}),
    Color: new FormControl({value: '', disabled: true}),
    Material: new FormControl({value: '', disabled: true}),
    price: new FormControl({value: '', disabled: true}),
    stock: new FormControl({value: '', disabled: true})
  });
  constructor(private route: ActivatedRoute,
              private coverService: CoverService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.coverService.getCoverById(this.id)
      .subscribe(coverFromRest => {
        this.cover = coverFromRest;
        this.coverForm.patchValue({
          id: coverFromRest.id,
          Name: coverFromRest.name,
          TypeOfBrand: coverFromRest.typeOfBrand,
          TypeOfModel: coverFromRest.typeOfModel,
          Color: coverFromRest.color,
          Material: coverFromRest.material,
          price: coverFromRest.price
        });
      });
  }


}
