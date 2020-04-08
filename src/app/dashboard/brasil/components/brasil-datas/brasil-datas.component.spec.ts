import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasilDatasComponent } from './brasil-datas.component';

describe('BrasilDatasComponent', () => {
  let component: BrasilDatasComponent;
  let fixture: ComponentFixture<BrasilDatasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasilDatasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasilDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
