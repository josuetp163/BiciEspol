import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmForoComponent } from './adm-foro.component';

describe('AdmForoComponent', () => {
  let component: AdmForoComponent;
  let fixture: ComponentFixture<AdmForoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmForoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
