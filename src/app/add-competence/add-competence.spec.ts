import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetence } from './add-competence';

describe('AddCompetence', () => {
  let component: AddCompetence;
  let fixture: ComponentFixture<AddCompetence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCompetence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCompetence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
