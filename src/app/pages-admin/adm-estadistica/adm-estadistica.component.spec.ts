import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEstadisticaComponent } from './adm-estadistica.component';

describe('AdmEstadisticaComponent', () => {
  let component: AdmEstadisticaComponent;
  let fixture: ComponentFixture<AdmEstadisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmEstadisticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEstadisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
