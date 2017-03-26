import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashsetComponent } from './flashset.component';

describe('FlashsetComponent', () => {
  let component: FlashsetComponent;
  let fixture: ComponentFixture<FlashsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
