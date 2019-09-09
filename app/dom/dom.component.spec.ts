import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DOMComponent } from './dom.component';

describe('DOMComponent', () => {
  let component: DOMComponent;
  let fixture: ComponentFixture<DOMComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DOMComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
