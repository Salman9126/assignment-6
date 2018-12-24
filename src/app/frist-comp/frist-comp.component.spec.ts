import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FristCompComponent } from './frist-comp.component';

describe('FristCompComponent', () => {
  let component: FristCompComponent;
  let fixture: ComponentFixture<FristCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FristCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FristCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
