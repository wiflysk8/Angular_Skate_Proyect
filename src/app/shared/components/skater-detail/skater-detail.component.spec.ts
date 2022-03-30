import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkaterDetailComponent } from './skater-detail.component';

describe('SkaterDetailComponent', () => {
  let component: SkaterDetailComponent;
  let fixture: ComponentFixture<SkaterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkaterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkaterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
