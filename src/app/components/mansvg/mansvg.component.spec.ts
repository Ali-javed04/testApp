import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MansvgComponent } from './mansvg.component';

describe('MansvgComponent', () => {
  let component: MansvgComponent;
  let fixture: ComponentFixture<MansvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MansvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MansvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
