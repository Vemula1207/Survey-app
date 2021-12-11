import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, Inject, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Emailing } from '../model/Emailing';
import { EmailingService } from '../services/emailing.service';

@Component({
  selector: 'app-emailing',
  templateUrl: './emailing.component.html',
  styleUrls: ['./emailing.component.css']
})
export class EmailingComponent implements OnInit {
  emailObj= new Emailing();
  public message="";

  public link="";
  emails=[];


  OnShare(){
    this.emailObj.message=this.message;
    this.emailObj.recipients=this.emails;
    this.emailObj.link=this.link;
    console.log(this.emailObj);

    this.emailingService.shareToEmails(this.emailObj).subscribe(data =>{
      console.log('Emails sent sucessfully!!',data);
    } , error => {
      console.log('error in sending Emails',error);
    });
  }

  constructor( public emailingService: EmailingService, public dialogRef: MatDialogRef<EmailingComponent>,
  @Inject(MAT_DIALOG_DATA)private data: any) { 
    this.link = data.link;
  }

  ngOnInit(): void { }
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  
 // emails: string[]=[];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.emails.push(value);
    }

    // Clear the input value
    if (event.input) {
      event.input.value = '';
    }
  }

  remove(email: string): void {
    const index = this.emails.indexOf(email);

    if (index >= 0) {
      this.emails.splice(index, 1);
    }
  }
}
