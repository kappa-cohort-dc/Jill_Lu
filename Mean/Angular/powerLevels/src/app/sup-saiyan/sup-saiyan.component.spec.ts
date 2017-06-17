import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupSaiyanComponent } from './sup-saiyan.component';

describe('SupSaiyanComponent', () => {
  let component: SupSaiyanComponent;
  let fixture: ComponentFixture<SupSaiyanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupSaiyanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupSaiyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
