import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  public userRole:string;
  public email:string;
  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router,
    private securityService: LoginServicesService) {
     
  }

  ngOnInit(): void {
    
    
    this.route.queryParams.subscribe(p => {
      this.securityService.fetchToken(p.code, p.state).subscribe(data => {
        this.securityService.updateToken(data.accessToken);
        this.securityService.getUserInfo().subscribe(data => {
         console.log(data);
          localStorage.setItem("email",data.mailId);
          localStorage.setItem("name",data.name);
          localStorage.setItem("userRole",data.userRole);
          if(data.role=="Desendent"){
            this.router.navigate(['/filler-dash']);
          }
          else{
            this.router.navigate(['/sidenav/surveylist']);
          }
    
        });
        
        
        
      })
    })
  }
  // getUserInfo(): Observable<any> {
  //   return this.http.get(environment.baseUrl + '/v1/home');
  // }
  // getUserEmail(): Observable<any> {
  //   return this.http.get(environment.baseUrl + '/get/email');
  // }


}
