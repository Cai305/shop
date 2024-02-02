import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesLayerComponent } from './categories-layer.component';

describe('CategoriesLayerComponent', () => {
  let component: CategoriesLayerComponent;
  let fixture: ComponentFixture<CategoriesLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesLayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
