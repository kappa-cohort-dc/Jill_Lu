import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayercreateComponent } from './playercreate.component';

describe('PlayercreateComponent', () => {
  let component: PlayercreateComponent;
  let fixture: ComponentFixture<PlayercreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayercreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
