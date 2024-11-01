import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAppComponent } from './cart-app.component';

describe('CartAppComponent', () => {
  let component: CartAppComponent;
  let fixture: ComponentFixture<CartAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
