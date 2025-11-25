import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../services/api-rest';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  standalone: false
})
export class UsuariosPage implements OnInit {

  users: any[] = [];

  constructor(private api: ApiRestService) {}

  ngOnInit() {
    this.loadUsers();
  }

  // Método GET

  loadUsers() {
    this.api.getUsers().subscribe((res: any) => {
      this.users = res;
    });
  }

  // Método POST

  addUser() {
    const nuevo = {
      nombre: "Usuario Nuevo",
      email: "nuevo@example.com"
    };

    this.api.createUser(nuevo).subscribe(() => {
      this.loadUsers();
    });
  }

  // Método DELETE
  
  deleteUser(id: number) {
    this.api.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
}
