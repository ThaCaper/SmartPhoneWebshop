import { Component, OnInit } from '@angular/core';
import {SmartPhone} from '../../../shared/models/smartPhone';
import {SmartphoneService} from '../../../shared/services/smartphone.service';

@Component({
  selector: 'app-smart-phones-list',
  templateUrl: './smart-phones-list.component.html',
  styleUrls: ['./smart-phones-list.component.css']
})
export class SmartPhonesListComponent implements OnInit {
smart: SmartPhone[];
loading: boolean;
  constructor(private smartPhoneService: SmartphoneService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.smartPhoneService.getSmartPhones().subscribe(smartPhones => {
      this.smart = smartPhones;
    });
  }

  delete(id: number) {
    this.smartPhoneService.deleteSmartPhone(id)
      .subscribe(message => {
        this.refresh();
      });
  }
}
