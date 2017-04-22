import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlContentComponent } from './vl-content.component';

describe('VlContentComponent', () => {
  let component: VlContentComponent;
  let fixture: ComponentFixture<VlContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
