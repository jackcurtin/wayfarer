import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanFranComponent } from './san-fran.component';

describe('SanFranComponent', () => {
  let component: SanFranComponent;
  let fixture: ComponentFixture<SanFranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanFranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanFranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
