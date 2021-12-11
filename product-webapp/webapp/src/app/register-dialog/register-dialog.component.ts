import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterUser } from '../model/register-user';
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,private http:HttpClient,private router: Router,private loginSrrvice:LoginServicesService) { }
  name="";
  email="";
  userRole="Assessor";

  ngOnInit(): void {
  }
  proceed()
  {
    
    if(this.name.length==0)
    {
      this.snackBar.open("Please enter your name","Dismiss")
    }
    else if(this.email.length==0){
      this.snackBar.open("Please enter your Email id","Dismiss")

    }
    else{
      
      
     let user= new RegisterUser();
    user.name=this.name;
    user.email=this.email;
    user.role=this.userRole;
    this.router.navigate(['/payment',user.name,user.email]);
      
    }
    //console.log(this.name,this.email,this.userRole)
    
    
  }
}
