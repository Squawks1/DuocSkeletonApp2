import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DbtaskService {

  private db!: SQLiteObject;

  constructor(private sqlite: SQLite, private storage: Storage) {
    this.initStorage();
    this.setDatabase();
  }

  async initStorage() {
    await this.storage.create();
  }

  async setDatabase() {
    this.db = await this.sqlite.create({
      name: 'skeletonapp.db',
      location: 'default'
    });
    return this.createTables();
  }

  async createTables() {
    const sql = `CREATE TABLE IF NOT EXISTS sesion_data(
      user_name TEXT PRIMARY KEY NOT NULL,
      password INTEGER NOT NULL,
      active INTEGER NOT NULL
    )`;
    return this.db.executeSql(sql, []);
  }

  validarLogin(user: string, pass: number) {
    const sql = "SELECT * FROM sesion_data WHERE user_name=? AND password=?";
    return this.db.executeSql(sql, [user, pass]);
  }

  registrarUsuario(user: string, pass: number) {
    const sql = "INSERT INTO sesion_data(user_name,password,active) VALUES(?,?,1)";
    return this.db.executeSql(sql, [user, pass]);
  }

  actualizarEstado(user: string, active: number) {
    const sql = "UPDATE sesion_data SET active=? WHERE user_name=?";
    return this.db.executeSql(sql, [active, user]);
  }

  sesionActiva() {
    const sql = "SELECT * FROM sesion_data WHERE active=1 LIMIT 1";
    return this.db.executeSql(sql, []);
  }

  async guardarStorage(usuario: string) {
    await this.storage.set("usuario", usuario);
  }

  obtenerStorage() {
    return this.storage.get("usuario");
  }

  eliminarStorage() {
    return this.storage.remove("usuario");
  }
}
