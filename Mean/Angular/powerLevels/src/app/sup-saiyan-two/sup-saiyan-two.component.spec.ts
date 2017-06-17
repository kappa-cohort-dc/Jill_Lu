import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupSaiyanTwoComponent } from './sup-saiyan-two.component';

describe('SupSaiyanTwoComponent', () => {
  let component: SupSaiyanTwoComponent;
  let fixture: ComponentFixture<SupSaiyanTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupSaiyanTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupSaiyanTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
