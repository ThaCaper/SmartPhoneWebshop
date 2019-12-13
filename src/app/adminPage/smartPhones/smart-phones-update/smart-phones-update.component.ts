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
    screen: new FormControl('')
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
          OS: smartPhoneFromRest.os,
          CpuType: smartPhoneFromRest.cputype,
          Camera: smartPhoneFromRest.camera,
          Memory: smartPhoneFromRest.memory,
          Screen: smartPhoneFromRest.screen
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
