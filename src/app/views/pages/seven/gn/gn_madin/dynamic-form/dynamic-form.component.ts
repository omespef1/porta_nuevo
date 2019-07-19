import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormData, MockForm, Gn_Madi, Gn_Dmadi } from '../models/FormData';
import { RgnmadinService } from '../../../services/rgnmadin.service';
import { Data } from '@angular/router';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'kt-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() formData: FormData[];
  form: FormGroup;
  submitted: boolean;
  formDataSeven: any = {};
  timeNow: NgbTimeStruct = { hour: new Date().getHours(), minute: new Date().getMinutes(), second: 0 };
  headerFileds: Gn_Dmadi[];
  detailFileds: Gn_Dmadi[];
  

  constructor(private _RgnmadinService: RgnmadinService) { }

  ngOnInit() {

    this.GetGnMadin();
  }

  submitForm() {

    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      console.log('FINAL');
    }, 500);


  }

  GetGnMadin() {
    this._RgnmadinService.getGnMadinkByProcodi('SGMPLANE', 1).subscribe((resp: Gn_Madi) => {
      console.log(resp);
      this.formDataSeven = resp;
      let formData: Gn_Madi = this.formDataSeven;    
      const formGroup = {};    
      formData.Gn_Dmadi.forEach(formControl => {
        formGroup[formControl.dma_calm] = new FormControl('');
      });
      this.headerFileds = formData.Gn_Dmadi.filter(f => f.dma_deta == 'N');
      this.detailFileds = formData.Gn_Dmadi.filter(f => f.dma_deta == 'S');
      this.form = new FormGroup(formGroup);      
    })
  }

}
