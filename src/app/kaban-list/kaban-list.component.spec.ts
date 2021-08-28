import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabanListComponent } from './kaban-list.component';

describe('KabanListComponent', () => {
  let component: KabanListComponent;
  let fixture: ComponentFixture<KabanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KabanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
