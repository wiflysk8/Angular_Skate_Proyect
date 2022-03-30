import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGalleryComponent } from './shop-gallery.component';

describe('ShopGalleryComponent', () => {
  let component: ShopGalleryComponent;
  let fixture: ComponentFixture<ShopGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
