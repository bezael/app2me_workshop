import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslatePipe } from '@dominicode-ui/i18n';
type ButtonMode = 'primary' | 'danger';

@Component({
  selector: 'lib-button-ui',
  standalone: true,
  imports: [NgClass, TranslatePipe],
  template: ` <button
    [ngClass]="['custom-button', variant()]"
    [style.fontSize.px]="fontSize()"
  >
    {{ label() | translate }}
  </button>`,
  styleUrl: './button-ui.component.scss',
})
export class ButtonUIComponent {
  label = input<string>('Click me!');
  variant = input<ButtonMode>('primary');
  fontSize = input<number>(16);
}
