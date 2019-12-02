import { Component, OnInit } from '@angular/core';
import {Cover} from '../../../shared/models/cover';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-covers-add',
  templateUrl: './covers-add.component.html',
  styleUrls: ['./covers-add.component.css']
})
export class CoversAddComponent implements OnInit {
  cover: Cover;
  coverForm = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    model: new FormControl(''),
    color: new FormControl(''),
    mats: new FormControl(''),
    price: new FormControl('')
  });
  constructor(private router: Router,
              private coverService) { }

  ngOnInit() {
  }

  save() {
    const coverToAdd = this.coverService.value;
    this.coverService.addCover(coverToAdd)
      .subscribe(() => {
        this.router.navigateByUrl('/covers');
    });
  }
}
