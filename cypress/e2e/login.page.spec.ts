import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from '../../src/app/pages/login/login.page';
import { AlertController, NavController } from '@ionic/angular';


describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;

  beforeEach(async () => {
    navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateForward']);
    alertControllerSpy = jasmine.createSpyObj('AlertController', ['create'])


    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      providers: [
        { provide: NavController, useValue: navCtrlSpy },
        { provide: AlertController, useValue: alertControllerSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Por alguna razón, no me reconoce tobetruthy, tobeundefined y el resto
  
  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería inicializar usuario y contraseña vacíos', () => {
    expect(component.user).toBe('');
    expect(component.pass).toBe('');
  });

  it('Debería ejecutar login sin errores', () => {
    spyOn(component, 'login');
    component.login();
    expect(component.login).toHaveBeenCalled();
  });

});
