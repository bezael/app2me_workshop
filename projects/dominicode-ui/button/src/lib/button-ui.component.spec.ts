import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipe } from '@dominicode-ui/i18n';
import { ButtonUIComponent } from './button-ui.component';

describe('ButtonUIComponent', () => {
  let component: ButtonUIComponent;
  let fixture: ComponentFixture<ButtonUIComponent>;
  let translatePipeSpy: jasmine.SpyObj<TranslatePipe>;

  beforeEach(async () => {
    translatePipeSpy = jasmine.createSpyObj('TranslatePipe', ['transform']);
    translatePipeSpy.transform.and.callFake(
      (value: string) => `${value} (Translated)`
    );

    await TestBed.configureTestingModule({
      imports: [ButtonUIComponent],
      providers: [{ provide: TranslatePipe, useValue: translatePipeSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default label "Click me!"', () => {
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonElement.textContent?.trim()).toBe('Click me! (translated)');
  });

  it('should change label when input is provided', () => {
    fixture.componentRef.setInput('label', 'New Label');
    fixture.detectChanges();
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonElement.textContent?.trim()).toBe('New Label (translated)');
  });

  it('should have primary variant by default', () => {
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('primary')).toBeTruthy();
  });

  it('should change variant when input is provided', () => {
    fixture.componentRef.setInput('variant', 'danger');
    fixture.detectChanges();
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('danger')).toBeTruthy();
  });

  it('should have default font size of 16px', () => {
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonElement.style.fontSize).toBe('16px');
  });

  it('should change font size when input is provided', () => {
    // component.fontSize.set(20);
    fixture.componentRef.setInput('fontSize', 20);
    fixture.detectChanges();
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonElement.style.fontSize).toBe('20px');
  });

  describe('onClick', () => {
    it('should emit clicked event when onClick is called', () => {
      // Arrange
      spyOn(component.clicked, 'emit');

      // Act
      component.onClick();

      // Assert
      expect(component.clicked.emit).toHaveBeenCalled();
    });

    it('should emit clicked event when button is clicked', () => {
      // Arrange
      spyOn(component.clicked, 'emit');
      const button: HTMLButtonElement =
        fixture.nativeElement.querySelector('button');

      // Act
      button.click();
      fixture.detectChanges();

      // Assert
      expect(component.clicked.emit).toHaveBeenCalled();
    });
  });
});
