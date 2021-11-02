import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListGalleryComponent } from './cards-list-gallery.component';

describe('CardsListGalleryComponent', () => {
  let component: CardsListGalleryComponent;
  let fixture: ComponentFixture<CardsListGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsListGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsListGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
