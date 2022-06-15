import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreCrudComponent } from './parametre-crud.component';

describe('ParametreCrudComponent', () => {
  let component: ParametreCrudComponent;
  let fixture: ComponentFixture<ParametreCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametreCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
