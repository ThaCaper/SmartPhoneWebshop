import { Component, OnInit } from '@angular/core';
import {SmartPhone} from '../../../shared/models/smartPhone';
import {FormControl, FormGroup} from '@angular/forms';
import {SmartphoneService} from '../../../shared/services/smartphone.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-smart-phones-add',
  templateUrl: './smart-phones-add.component.html',
  styleUrls: ['./smart-phones-add.component.css']
})
export class SmartPhonesAddComponent implements OnInit {
  smart: SmartPhone;
  smartPhoneForm = new FormGroup({
    name: new FormControl(''),
    os: new FormControl(''),
    cpuType: new FormControl(''),
    camera: new FormControl(''),
    memory: new FormControl(''),
    screen: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl('')
  });
  constructor(private smartPhoneService: SmartphoneService,
              private router: Router) { }

  ngOnInit() {
  }

  save() {
    const smartPhone = this.smartPhoneForm.value;
    this.smartPhoneService.addSmartPhone(smartPhone)
      .subscribe(() => {
        this.router.navigateByUrl('/smartPhones');
      });
  }
}
