import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedQuizzesComponent } from './saved-quizzes.component';

describe('SavedQuizzesComponent', () => {
  let component: SavedQuizzesComponent;
  let fixture: ComponentFixture<SavedQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedQuizzesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
