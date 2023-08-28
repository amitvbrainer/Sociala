import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

type NewType = boolean;
@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<NewType | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const username = localStorage.getItem('email');
    if (state.url.includes('login')) {
      if (!username) {
        return true;
      } else {
        this.router.navigate(['/home']);
        return false;
      }
    } else {
      if (username) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
  }
}
