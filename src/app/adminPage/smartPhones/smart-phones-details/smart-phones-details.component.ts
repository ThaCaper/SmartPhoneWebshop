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
    Name: new FormControl({value: '', disabled: true}),
    OS: new FormControl({value: '', disabled: true}),
    CPU: new FormControl({value: '', disabled: true}),
    Camera: new FormControl({value: '', disabled: true}),
    Memory: new FormControl({value: '', disabled: true}),
    Screen: new FormControl({value: '', disabled: true})
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
          Name: smartPhoneFromRest.name,
          OS: smartPhoneFromRest.os,
          CPU: smartPhoneFromRest.cputype,
          Camera: smartPhoneFromRest.camera,
          Memory: smartPhoneFromRest.memory,
          Screen: smartPhoneFromRest.screen
        });
      });
  }

}
