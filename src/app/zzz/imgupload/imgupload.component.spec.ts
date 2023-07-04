import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImguploadComponent } from './imgupload.component';

describe('ImguploadComponent', () => {
  let component: ImguploadComponent;
  let fixture: ComponentFixture<ImguploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImguploadComponent]
    });
    fixture = TestBed.createComponent(ImguploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
