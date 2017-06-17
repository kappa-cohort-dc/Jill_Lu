import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupSaiyanFourComponent } from './sup-saiyan-four.component';

describe('SupSaiyanFourComponent', () => {
  let component: SupSaiyanFourComponent;
  let fixture: ComponentFixture<SupSaiyanFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupSaiyanFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupSaiyanFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
