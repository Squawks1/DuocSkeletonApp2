import { Component } from '@angular/core';
import { DbtaskService } from 'src/app/services/dbtask';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: false
})
export class HomePage {

  segmentValue = "misdatos";

  constructor(private db: DbtaskService, private router: Router) {}

  async logout(){
    const user = await this.db.obtenerStorage();
    await this.db.actualizarEstado(user, 0);
    await this.db.eliminarStorage();
    this.router.navigate(['/login']);
  }
}
