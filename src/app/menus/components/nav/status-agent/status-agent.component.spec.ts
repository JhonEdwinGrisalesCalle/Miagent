import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAgentComponent } from './status-agent.component';

describe('StatusAgentComponent', () => {
  let component: StatusAgentComponent;
  let fixture: ComponentFixture<StatusAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
