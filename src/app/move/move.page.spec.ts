import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovePage } from './move.page';

describe('MovePage', () => {
  let component: MovePage;
  let fixture: ComponentFixture<MovePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
