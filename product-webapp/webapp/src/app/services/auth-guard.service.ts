import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServicesService } from './login-services.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private securityService: LoginServicesService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.securityService.isLoggedIn() && localStorage.getItem("userRole")=="Assessor") {
      return true;
    }
    if(this.securityService.isLoggedIn() && localStorage.getItem("userRole")=="Desendent"){
      this.router.navigate(['/filler-dash']);
      return false;
    }
    this.router.navigate(['/login']);
    return false;
  }
  

}
