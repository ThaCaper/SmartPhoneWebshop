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
    name: new FormControl({value: '', disabled: true}),
    typeOfBrand: new FormControl({value: '', disabled: true}),
    typeOfModel: new FormControl({value: '', disabled: true}),
    color: new FormControl({value: '', disabled: true}),
    material: new FormControl({value: '', disabled: true}),
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
          name: coverFromRest.name,
          typeOfBrand: coverFromRest.typeOfBrand,
          typeOfModel: coverFromRest.typeOfModel,
          color: coverFromRest.color,
          material: coverFromRest.material,
          price: coverFromRest.price
        });
      });
  }


}
