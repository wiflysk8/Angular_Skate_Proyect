import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkaterProfileComponent } from './skater-profile.component';

describe('SkaterProfileComponent', () => {
  let component: SkaterProfileComponent;
  let fixture: ComponentFixture<SkaterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkaterProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkaterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
