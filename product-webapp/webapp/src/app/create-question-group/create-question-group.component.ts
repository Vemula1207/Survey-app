import { Component, OnInit } from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatChip , MatChipsModule} from '@angular/material/chips';
import { QuestionGroup } from '../model/QuestionGroup';
import { CreateQuesGroupService } from '../services/create-ques-group.service';
import { LoginServicesService } from '../services/login-services.service';
export interface Tag {
  name: string;
}
@Component({
  selector: 'app-create-question-group',
  templateUrl: './create-question-group.component.html',
  styleUrls: ['./create-question-group.component.css']
})

export class CreateQuestionGroupComponent implements OnInit {
  groupObject=new QuestionGroup();
  public groupTitle="";
  tags= [];


  constructor( private createQuesGroupService:CreateQuesGroupService , private securityService: LoginServicesService) { }

 ngOnInit(): void {
 }
 onPost(){
   console.log(this.groupObject);
   this.groupObject.groupTitle=this.groupTitle;
   this.groupObject.tags=this.tags;
    this.groupObject.createdBy=localStorage.getItem("email");
    this.groupObject.createdOn=10022020;
    this.createQuesGroupService.addQuesGroup(this.groupObject).subscribe(data =>{
    console.log('new question group created',data);
  } , error => {
    console.log('error in creating question group',error);
  });
  // location.reload();
 }
selectable = true;
removable = true;
addOnBlur = true;
readonly separatorKeysCodes = [ENTER, COMMA] as const;
// tags: Tag[] = [];

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
}

remove(tag: Tag): void {
  const index = this.tags.indexOf(tag);

  if (index >= 0) {
    this.tags.splice(index, 1);
  }
}


}
