import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbtaskService } from 'src/app/services/dbtask';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  standalone: false
})
export class CertificacionesComponent implements OnInit {

  certificaciones: any[] = [];

  form = this.fb.group({
    nombre: ['', Validators.required],
    fechaObtencion: ['', Validators.required],
    vence: [false],
    fechaVencimiento: ['']
  });

  constructor(private fb: FormBuilder, private db: DbtaskService) {}

  ngOnInit(){
    this.loadCertificaciones();
  }

  async loadCertificaciones(){
    const res = await this.db.getCertificaciones();
    this.certificaciones = [];
    for(let i=0; i < res.rows.length; i++){
      this.certificaciones.push(res.rows.item(i));
    }
  }

  async guardar(){
    if (this.form.invalid) return alert("Complete los campos correctamente");

    const vence = this.form.value.vence ? 1 : 0;
    const fechaVen = this.form.value.vence ? this.form.value.fechaVencimiento : null;

    await this.db.insertCertificacion(
      this.form.value.nombre!,
      this.form.value.fechaObtencion!,
      vence,
      fechaVen
    );

    this.form.reset();
    this.loadCertificaciones();
  }

  async eliminar(id:number){
    await this.db.deleteCertificacion(id);
    this.loadCertificaciones();
  }
}
