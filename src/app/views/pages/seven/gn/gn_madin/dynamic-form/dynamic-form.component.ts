import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {FormData,MockForm} from '../models/FormData';


@Component({
  selector: 'kt-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input()formData: FormData[];
  form: FormGroup;
  submitted: boolean;




  
  constructor() { }

  ngOnInit() {
    const formGroup = {};
     this.formData = MockForm;
    this.formData.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl('');
    });

    this.form = new FormGroup(formGroup);
  }

    submitForm() {
      
    this.submitted = true;


    setTimeout(() => {
      this.submitted=false;
    },500);
  }

}
