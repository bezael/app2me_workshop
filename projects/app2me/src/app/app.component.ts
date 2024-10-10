import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DominicodeUIComponent } from '@dominicode-ui';
import { ButtonUIComponent } from '@dominicode-ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonUIComponent, DominicodeUIComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app2me';
}
