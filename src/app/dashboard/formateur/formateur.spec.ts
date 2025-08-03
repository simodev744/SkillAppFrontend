import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formateur } from './formateur';

describe('Formateur', () => {
  let component: Formateur;
  let fixture: ComponentFixture<Formateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
