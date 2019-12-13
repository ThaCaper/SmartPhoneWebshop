import { Component, OnInit } from '@angular/core';
import {Cover} from '../../../shared/models/cover';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CoverService} from '../../../shared/services/cover.service';

@Component({
  selector: 'app-covers-add',
  templateUrl: './covers-add.component.html',
  styleUrls: ['./covers-add.component.css']
})
export class CoversAddComponent implements OnInit {
  cover: Cover;
  coverForm = new FormGroup({
    Name: new FormControl(''),
    TypeOfBrand: new FormControl(''),
    TypeOfModel: new FormControl(''),
    Color: new FormControl(''),
    Material: new FormControl(''),
    Price: new FormControl('')
  });
  constructor(private router: Router,
              private coverService: CoverService) { }

  ngOnInit() {
  }

  save() {
    const coverToAdd = this.coverForm.value;
    this.coverService.addCover(coverToAdd)
      .subscribe(() => {
        this.router.navigateByUrl('/covers');
    });
  }
}
