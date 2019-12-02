import { Component, OnInit } from '@angular/core';
import {Cover} from '../../../shared/models/cover';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CoverService} from '../../../shared/services/cover.service';

@Component({
  selector: 'app-covers-update',
  templateUrl: './covers-update.component.html',
  styleUrls: ['./covers-update.component.css']
})
export class CoversUpdateComponent implements OnInit {
  id: number;
  coverForm = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    model: new FormControl(''),
    color: new FormControl(''),
    mats: new FormControl(''),
    price: new FormControl('')
  });
  constructor(private router: Router,
              private route: ActivatedRoute,
              private coverService: CoverService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.coverService.getCoverById(this.id)
      .subscribe(coverFromRest => {
        this.coverForm.patchValue({
          name: coverFromRest.name,
          brand: coverFromRest.typeOfBrand,
          model: coverFromRest.typeOfModel,
          color: coverFromRest.color,
          mats: coverFromRest.material,
          price: coverFromRest.price
        });
      });
  }

  save() {
    const cover = this.coverForm.value;
    cover.id = this.id;
    this.coverService.updateCover(cover)
      .subscribe(() => {
        this.router.navigateByUrl('/covers');
      });
  }
}
