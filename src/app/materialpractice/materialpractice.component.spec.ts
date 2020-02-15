import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialpracticeComponent } from './materialpractice.component';

describe('MaterialpracticeComponent', () => {
  let component: MaterialpracticeComponent;
  let fixture: ComponentFixture<MaterialpracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialpracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
