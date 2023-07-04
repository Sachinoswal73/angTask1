import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcardsComponent } from './showcards.component';

describe('ShowcardsComponent', () => {
  let component: ShowcardsComponent;
  let fixture: ComponentFixture<ShowcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcardsComponent]
    });
    fixture = TestBed.createComponent(ShowcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
