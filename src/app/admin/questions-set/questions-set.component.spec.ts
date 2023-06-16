import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsSetComponent } from './questions-set.component';

describe('QuestionsSetComponent', () => {
  let component: QuestionsSetComponent;
  let fixture: ComponentFixture<QuestionsSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
