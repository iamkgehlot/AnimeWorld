import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentseasonComponent } from './currentseason.component';

describe('CurrentseasonComponent', () => {
  let component: CurrentseasonComponent;
  let fixture: ComponentFixture<CurrentseasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentseasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentseasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
