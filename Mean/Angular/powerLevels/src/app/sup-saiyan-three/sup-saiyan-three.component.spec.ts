import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupSaiyanThreeComponent } from './sup-saiyan-three.component';

describe('SupSaiyanThreeComponent', () => {
  let component: SupSaiyanThreeComponent;
  let fixture: ComponentFixture<SupSaiyanThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupSaiyanThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupSaiyanThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
