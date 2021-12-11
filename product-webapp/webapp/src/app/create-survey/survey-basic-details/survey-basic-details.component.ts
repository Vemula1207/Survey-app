import { Component } from '@angular/core';
// tags
import {COMMA, ENTER, T} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

import { ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
// duration
import { EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { IfStmt } from '@angular/compiler';

// tags
export interface Tag {
  name: string;
}
@Component({
  selector: 'app-survey-basic-details',
  templateUrl: './survey-basic-details.component.html',
  styleUrls: ['./survey-basic-details.component.css']
})

export class SurveyBasicDetailsComponent {

  @Output() basicDetailsOfSurvey = new EventEmitter<FormGroup>();

  // tags
  tags: string[] = [];

  duration: Number;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  isNameValid: boolean=false;
  isDescriptionValid: boolean = false;
  isTagsValid: boolean = false;
  isDurationValid: boolean = false;
  disableNextButton: boolean = true;

  ngOnInit(): void{
    
  }
  

  constructor() {
    this.duration =0;
  }
  
  
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    console.log('added value',event.value,this.tags); 
    // Add our tag
    if (value) {
      this.tags.push(value);
    }
  
    // Clear the input value
    //  event.chipInput!.clear();
    if (event.input) {
      event.input.value = '';
    }

    console.log(this.tags)
    this.surveyBasicDetailsForm.value.tags = this.tags;
    console.log(this.surveyBasicDetailsForm.value.tags)
  }
  
  remove(tag: string): void {
    const index = this.tags.indexOf(tag);
  
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
    console.log(this.tags)
    this.surveyBasicDetailsForm.value.tags = this.tags;
    console.log(this.surveyBasicDetailsForm.value.tags);
  }

  // creating model
  surveyBasicDetailsForm = new FormGroup({
    surveyName : new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
    ]),
    description : new FormControl('',[
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(30)
    ]),
    tags : new FormControl([],[
      Validators.required
    ]),
    duration : new FormControl('',[
      Validators.required
    ])
    
  });
  

  floorValue(){

    let actualDuration = this.surveyBasicDetailsForm.value.duration/60;
    
    this.duration = Number ((actualDuration).toFixed());

    if(this.duration>actualDuration){
      let temp = (this.duration).valueOf() - 1;
      this.duration = temp;
    }
  }

  passSurveyBasicDetails(){
    
    if(this.validateForm()){
      this.surveyBasicDetailsForm.value.tags = this.tags;
      console.log(this.tags.toString());
      console.log(this.surveyBasicDetailsForm.value)
      this.basicDetailsOfSurvey.emit(this.surveyBasicDetailsForm);
    }
  }

  validateForm(){

    if(this.surveyBasicDetailsForm.controls.surveyName.errors!=null ){

      this.isNameValid=false;

    }else{
      this.isNameValid=true;
    }

    if(this.surveyBasicDetailsForm.controls.description.errors!=null){
      this.isDescriptionValid=false;
    }else{
      this.isDescriptionValid=true;
    }

    if(this.surveyBasicDetailsForm.controls.tags.errors!=null){
      this.isTagsValid=false;
    }else{
      this.isTagsValid=true;
    }

    if(this.surveyBasicDetailsForm.controls.duration.errors!=null){
      this.isDurationValid=false;
    }else{
      this.isDurationValid=true;
    }

    if(this.isNameValid&&this.isDescriptionValid&&this.isTagsValid&&this.isDurationValid){
      this.disableNextButton=false;
      return true;
    }else{
      this.disableNextButton=true;
      return false;
    }

  }
  
}
