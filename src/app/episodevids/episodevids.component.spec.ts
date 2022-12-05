import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodevidsComponent } from './episodevids.component';

describe('EpisodevidsComponent', () => {
  let component: EpisodevidsComponent;
  let fixture: ComponentFixture<EpisodevidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodevidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodevidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
