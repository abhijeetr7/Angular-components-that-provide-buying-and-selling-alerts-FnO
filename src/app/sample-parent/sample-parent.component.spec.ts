import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleParentComponent } from './sample-parent.component';

describe('SampleParentComponent', () => {
  let component: SampleParentComponent;
  let fixture: ComponentFixture<SampleParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
