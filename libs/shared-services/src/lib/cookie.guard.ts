import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CookieGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    const cookie = this.getCookie('connect.sid');
    console.log({cookie})
    if (cookie) {
      return true; 
    }
    return this.router.parseUrl('/login');
  }

  private getCookie(name: string): string | null {
    const cookies = document.cookie.split(';');
    console.log({cookies})
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

} 
