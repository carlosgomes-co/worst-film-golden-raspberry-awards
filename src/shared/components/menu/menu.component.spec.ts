import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [
        provideAnimations(),
        provideRouter([]),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it('should render the menu list', () => {
    /**
     * Arrange
     */
    component.items = [
      { title: 'Dashboard', link: '/dashboard' },
      { title: 'List', link: '/list' }
    ];

    /**
     * Act
     */
    fixture.detectChanges();

    /**
     * Assert
     */
    const items = fixture.nativeElement.querySelectorAll('a');
    expect(items.length).toBe(2);
  });
});
