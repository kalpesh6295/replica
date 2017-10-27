import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHookComponent } from './top-hook.component';

describe('TopHookComponent', () => {
  let component: TopHookComponent;
  let fixture: ComponentFixture<TopHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
