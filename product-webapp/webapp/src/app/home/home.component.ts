import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name;

  constructor(private http: HttpClient, private securityService: LoginServicesService,
              private router: Router) {
  }

  ngOnInit(): void {

    // this.getUserInfo().subscribe(data => this.name = data.name);
   
    
  }
  
  // getUserInfo(): Observable<any> {
  //   return this.http.get(environment.baseUrl + '/v1/home');
  // }

  logout()
  {
    this.securityService.logout() .subscribe(() => {
      this.securityService.removeToken();
      this.router.navigate(['/login']);
    });
  }

}
