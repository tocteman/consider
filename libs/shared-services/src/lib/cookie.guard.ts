import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CookieGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {

    return this.userService.checkAuth().pipe(
      map(response => {
        console.log({response})
        if (response.isAuthenticated) {
          return true
        } else {
          return this.router.parseUrl('/login');
        }
      }),
      catchError(error => {
        return of(this.router.parseUrl('/login'))
      })
    );
  }
}

