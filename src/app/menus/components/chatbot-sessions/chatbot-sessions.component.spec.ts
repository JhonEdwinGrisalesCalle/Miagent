import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotSessionsComponent } from './chatbot-sessions.component';

describe('ChatbotSessionsComponent', () => {
  let component: ChatbotSessionsComponent;
  let fixture: ComponentFixture<ChatbotSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotSessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
