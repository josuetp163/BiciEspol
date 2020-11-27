import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqBicicletasComponent } from './aq-bicicletas.component';

describe('AqBicicletasComponent', () => {
  let component: AqBicicletasComponent;
  let fixture: ComponentFixture<AqBicicletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AqBicicletasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AqBicicletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
