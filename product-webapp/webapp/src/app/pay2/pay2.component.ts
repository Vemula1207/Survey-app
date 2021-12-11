import { Component, NgZone, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginServicesService } from '../services/login-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterUser } from '../model/register-user';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-pay2',
  templateUrl: './pay2.component.html',
  styleUrls: ['./pay2.component.css']
})
export class Pay2Component implements OnInit {
  paymentDone=false;
  title = 'payment-service';
  flag=0;
  amount='';
  user=new RegisterUser();
  constructor(private securityService:LoginServicesService, private http: HttpClient ,private activatedRoute:ActivatedRoute ,private snackBar:MatSnackBar ,private zone: NgZone,private loginService:LoginServicesService,private router:Router, private paymentService:PaymentService) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    
  }


   chargeCreditCard(){
     if(this.amount.length==0){
      this.snackBar.open('Please select a plan','Dismiss');

     }
     else{

      let form = document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken({
     
      number: form.cardNumber.value,
      exp_month: form.expMonth.value,
      exp_year: form.expYear.value,
      cvc: form.cvc.value,
     
    }, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        console.log("user"+localStorage.getItem("email"));
        this.securityService.updateAssessor().subscribe(response=> {
          console.log(response);
        }, error=>{
          console.log(error);
        });

        this.chargeCard(token);
        
      } 
      
      
      else {
       
        alert('wrong card details');
        console.log(response.error.message);
        
      }
    });

     }

    
  }

   chargeCard = (token: string) => {
     this.paymentService.paymentForAssessor(token).subscribe(response => {
      console.log(response);
      this.snackBar.open('Payment Successful','Dismiss');
      this.zone.run(() => {
        this.router.navigate(['/login']);
     },error=> {
        console.log('error');
     });  
      })
      
  }
  setAmount1(){
    this.amount='300'
    console.log("amount"+this.amount)
  }

  setAmount2(){
    this.amount='500'
  }
  setAmount3(){
    this.amount='1000'
  }

  logout()
  {
    this.securityService.logout() .subscribe(() => {
      this.securityService.removeToken();
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      localStorage.removeItem("userRole");
      this.router.navigate(['']);
    });
  }
}

