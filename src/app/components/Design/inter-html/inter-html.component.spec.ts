import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterHtmlComponent } from './inter-html.component';

describe('InterHtmlComponent', () => {
  let component: InterHtmlComponent;
  let fixture: ComponentFixture<InterHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
