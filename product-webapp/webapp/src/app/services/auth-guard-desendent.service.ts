import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServicesService } from './login-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardDesendentService {

  constructor(private securityService: LoginServicesService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.securityService.isLoggedIn() && localStorage.getItem("userRole")=="Desendent") {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
