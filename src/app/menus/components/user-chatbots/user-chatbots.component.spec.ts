import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatbotsComponent } from './user-chatbots.component';

describe('UserChatbotsComponent', () => {
  let component: UserChatbotsComponent;
  let fixture: ComponentFixture<UserChatbotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChatbotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChatbotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
