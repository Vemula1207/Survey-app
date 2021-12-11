import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserprofileService } from '../services/userprofile.service';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Router } from '@angular/router';


export interface Tag {
  name: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  us:User;
 tags:Tag[]=[{ name:"Employee Satisfaction"},
    {name:"Customer Feedback" },
 {name:"Education"},
  {name:"Market Research"},
   {name:"Non Profit" },
  {name:"Healthcare"}];
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
 


  constructor(private usps:UserprofileService,private router:Router) { }

  ngOnInit(): void {
    this.us=new User()
    this.getdetails();
    alert("Filling out this form will help us to improve our recommendations for you");
  }

  getdetails()
  {
    this.us.name=localStorage.getItem("name");
    this.us.email=localStorage.getItem("email");
    this.us.userRole=localStorage.getItem("userRole");
  }
  adddetails()
  {
    this.tags.forEach((tag)=>{this.us.interests.push(tag.name);})
    this.usps.putDetails(this.us).subscribe((result)=>{console.log(result);});
  }
  gotologin()
  {
    this.router.navigateByUrl("/login");
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    console.log('added value',event.value,this.tags); 
    // Add our tag
    if (value) {
      this.tags.push({name:value});
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


