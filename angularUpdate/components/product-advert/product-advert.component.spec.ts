import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdvertComponent } from './product-advert.component';

describe('ProductAdvertComponent', () => {
  let component: ProductAdvertComponent;
  let fixture: ComponentFixture<ProductAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAdvertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
