import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DbtaskService } from 'src/app/services/dbtask';

describe('LoginPage', () => {

  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dbSpy: jasmine.SpyObj<DbtaskService>;

  beforeEach(async () => {

    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    dbSpy = jasmine.createSpyObj('DbtaskService', [
      'validarLogin',
      'actualizarEstado',
      'guardarStorage'
    ]);

    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [FormsModule],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: DbtaskService, useValue: dbSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inicializar usuario y pass vacíos', () => {
    expect(component.user).toBe('');
    expect(component.pass).toBe('');
  });

  it('Debe ejecutar login() cuando se llama', async () => {
    dbSpy.validarLogin.and.returnValue(Promise.resolve({ rows: { length: 1 } }));

    await component.login();

    expect(dbSpy.validarLogin).toHaveBeenCalled();
  });

});
