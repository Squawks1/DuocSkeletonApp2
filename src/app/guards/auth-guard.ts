import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DbtaskService } from '../services/dbtask';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private db: DbtaskService, private router: Router){}

  async canActivate() {

    //Bypass para Cypresss
    if (typeof window !== 'undefined' && (window as any).Cypress) {
      return true;
    }

    try {
      const res = await this.db.sesionActiva();
      if (res.rows.length > 0) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } catch {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
