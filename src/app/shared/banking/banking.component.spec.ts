import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca(): shoud poupanca have 10', () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it('(U) getCarteira(): shoud carteira have 50', () => {
    expect(component.getCarteira).toEqual(50);
  });

  it('(U) setSacar(): shoud transfer poupanca from carteira', () => {
    component.setSacar('10');
    fixture.detectChanges();

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  it('(U) setDepositar(): shoud transfer carteira from poupanca', ()=> {
    component.setDepositar('50');
    fixture.detectChanges
    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  })
});
