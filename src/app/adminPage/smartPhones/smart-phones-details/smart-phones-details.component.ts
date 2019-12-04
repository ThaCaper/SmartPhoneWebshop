import { Component, OnInit } from '@angular/core';
import {SmartPhone} from '../../../shared/models/smartPhone';
import {ActivatedRoute} from '@angular/router';
import {SmartphoneService} from '../../../shared/services/smartphone.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-smart-phones-details',
  templateUrl: './smart-phones-details.component.html',
  styleUrls: ['./smart-phones-details.component.css']
})
export class SmartPhonesDetailsComponent implements OnInit {
  phone: SmartPhone;
  id: number;
  smartPhoneForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    name: new FormControl({value: '', disabled: true}),
    os: new FormControl({value: '', disabled: true}),
    cpu: new FormControl({value: '', disabled: true}),
    camera: new FormControl({value: '', disabled: true}),
    memory: new FormControl({value: '', disabled: true}),
    screen: new FormControl({value: '', disabled: true}),
    price: new FormControl({value: '', disabled: true}),
    stock: new FormControl({value: '', disabled: true})
  });
  constructor(private route: ActivatedRoute,
              private phoneService: SmartphoneService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.phoneService.getSmartPhoneById(this.id)
      .subscribe(smartPhoneFromRest => {
        this.phone = smartPhoneFromRest;
        this.smartPhoneForm.patchValue({
          id: smartPhoneFromRest.id,
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

}
