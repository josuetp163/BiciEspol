import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmBicicletasComponent } from './adm-bicicletas.component';

describe('AdmBicicletasComponent', () => {
  let component: AdmBicicletasComponent;
  let fixture: ComponentFixture<AdmBicicletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmBicicletasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmBicicletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
