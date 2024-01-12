import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabteaxComponent } from './sabteax.component';

describe('SabteaxComponent', () => {
  let component: SabteaxComponent;
  let fixture: ComponentFixture<SabteaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SabteaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SabteaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
