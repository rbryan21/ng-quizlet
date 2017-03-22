import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlashcardSetComponent } from './view-flashcard-set.component';

describe('ViewFlashcardSetComponent', () => {
  let component: ViewFlashcardSetComponent;
  let fixture: ComponentFixture<ViewFlashcardSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFlashcardSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFlashcardSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
