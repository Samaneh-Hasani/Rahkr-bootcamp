import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailproducComponent } from './detailproduc.component';

describe('DetailproducComponent', () => {
  let component: DetailproducComponent;
  let fixture: ComponentFixture<DetailproducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailproducComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailproducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
