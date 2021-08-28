import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBreadcrumbComponent } from './menu-breadcrumb.component';

describe('MenuBreadcrumbComponent', () => {
  let component: MenuBreadcrumbComponent;
  let fixture: ComponentFixture<MenuBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
