import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePackagesComponent } from './home-packages.component';

describe('HomePackagesComponent', () => {
  let component: HomePackagesComponent;
  let fixture: ComponentFixture<HomePackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
