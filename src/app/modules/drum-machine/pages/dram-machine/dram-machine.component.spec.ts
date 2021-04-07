import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramMachineComponent } from './dram-machine.component';

describe('DramMachineComponent', () => {
  let component: DramMachineComponent;
  let fixture: ComponentFixture<DramMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DramMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DramMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
