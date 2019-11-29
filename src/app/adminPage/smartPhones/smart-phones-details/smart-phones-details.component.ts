import { Component, OnInit } from '@angular/core';
import {SmartPhone} from '../../../shared/models/smartPhone';
import {ActivatedRoute} from '@angular/router';
import {SmartphoneService} from '../../../shared/services/smartphone.service';

@Component({
  selector: 'app-smart-phones-details',
  templateUrl: './smart-phones-details.component.html',
  styleUrls: ['./smart-phones-details.component.css']
})
export class SmartPhonesDetailsComponent implements OnInit {
  phone: SmartPhone;
  constructor(private route: ActivatedRoute,
              private phoneService: SmartphoneService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.phoneService.getSmartPhoneById(id)
      .subscribe(phoneFromRest => {
        this.phone = phoneFromRest;
      });
  }

}
