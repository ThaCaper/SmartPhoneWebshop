import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SmartphoneService} from '../../../shared/services/smartphone.service';
import {FormControl, FormGroup} from '@angular/forms';
import {SmartPhone} from '../../../shared/models/smartPhone';

@Component({
  selector: 'app-smart-phones-update',
  templateUrl: './smart-phones-update.component.html',
  styleUrls: ['./smart-phones-update.component.css']
})
export class SmartPhonesUpdateComponent implements OnInit {
  id: number;
  smartPhoneForm = new FormGroup({
    name: new FormControl(''),
    os: new FormControl(''),
    cpu: new FormControl(''),
    camera: new FormControl(''),
    memory: new FormControl(''),
    screen: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
              private router: Router,
              private smartPhoneService: SmartphoneService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.smartPhoneService.getSmartPhoneById(this.id)
      .subscribe(smartPhoneFromRest => {
        this.smartPhoneForm.patchValue({
          name: smartPhoneFromRest.name,
          os: smartPhoneFromRest.os,
          cpu: smartPhoneFromRest.cpuType,
          camera: smartPhoneFromRest.camera,
          memory: smartPhoneFromRest.memory,
          screen: smartPhoneFromRest.screen,
          price: smartPhoneFromRest.price,
          stock: smartPhoneFromRest.stock
        });
      });
  }
  update() {
    const smartP = this.smartPhoneForm.value;
    smartP.id = this.id;
    this.smartPhoneService.updateSmartPhone(smartP)
      .subscribe(() => {
        this.router.navigateByUrl('/smartPhones');
      });
  }
}
