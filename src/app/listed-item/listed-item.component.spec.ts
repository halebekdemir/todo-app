import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedItemComponent } from './listed-item.component';

describe('ListedItemComponent', () => {
  let component: ListedItemComponent;
  let fixture: ComponentFixture<ListedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
