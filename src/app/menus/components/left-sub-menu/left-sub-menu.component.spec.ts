import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSubMenuComponent } from './left-sub-menu.component';

describe('LeftSubMenuComponent', () => {
  let component: LeftSubMenuComponent;
  let fixture: ComponentFixture<LeftSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSubMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
