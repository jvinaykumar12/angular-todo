import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishInputComponent } from './wish-input.component';

describe('WishInputComponent', () => {
  let component: WishInputComponent;
  let fixture: ComponentFixture<WishInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
