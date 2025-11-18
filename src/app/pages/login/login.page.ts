import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbtaskService } from 'src/app/services/dbtask';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: false
})
export class LoginPage {

  user = '';
  pass: any = '';

  constructor(private db: DbtaskService, private router: Router) {}

  async login() {
    const result = await this.db.validarLogin(this.user, this.pass);

    if (result.rows.length > 0) {
      await this.db.actualizarEstado(this.user, 1);
      await this.db.guardarStorage(this.user);
      alert('Inicio exitoso');
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o clave incorrectos');
    }
  }

  async registrar() {
    try {
      await this.db.registrarUsuario(this.user, this.pass);
      await this.db.guardarStorage(this.user);
      alert('Registrado correctamente');
      this.router.navigate(['/home']);
    } catch {
      alert('Usuario ya existe');
    }
  }
}
