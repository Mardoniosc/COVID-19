import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasildashComponent } from './brasildash.component';

describe('BrasildashComponent', () => {
  let component: BrasildashComponent;
  let fixture: ComponentFixture<BrasildashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasildashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasildashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
