import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbtaskService } from 'src/app/services/dbtask';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  standalone: false
})
export class ExperienciaLaboralComponent implements OnInit {

  experiencias: any[] = [];

  form = this.fb.group({
    empresa: ['', Validators.required],
    anoInicio: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
    actual: [false],
    anoTermino: [''],
    cargo: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private db: DbtaskService) {}

  ngOnInit(){
    this.loadExperiencias();
  }

  async loadExperiencias(){
    const res = await this.db.getExperiencias();
    this.experiencias = [];
    for (let i = 0; i < res.rows.length; i++) {
      this.experiencias.push(res.rows.item(i));
    }
  }

  async guardar(){
    if (this.form.invalid) return alert("Complete los campos correctamente");

    const actual = this.form.value.actual ? 1 : 0;
    const anoTermino = this.form.value.actual ? null : this.form.value.anoTermino;

    await this.db.insertExperiencia(
      this.form.value.empresa!,
      Number(this.form.value.anoInicio),
      actual,
      anoTermino,
      this.form.value.cargo!
    );

    this.form.reset();
    this.loadExperiencias();
  }

  async eliminar(id:number){
    await this.db.deleteExperiencia(id);
    this.loadExperiencias();
  }
}

