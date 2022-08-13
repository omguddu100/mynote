import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssScssdComponent } from './css-scssd.component';

describe('CssScssdComponent', () => {
  let component: CssScssdComponent;
  let fixture: ComponentFixture<CssScssdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssScssdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssScssdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
