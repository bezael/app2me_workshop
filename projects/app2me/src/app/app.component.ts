import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DominicodeUIComponent } from '@dominicode-ui';
import { ButtonUIComponent } from '@dominicode-ui/button';
import { DominicodeUIService } from '@dominicode-ui/index';
// import { DominicodeUIService } from '@dominicode-ui/DominicodeUIService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonUIComponent, DominicodeUIComponent],
  // providers: [DominicodeUIService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app2me';
  private readonly _dominicodeUIService = inject(DominicodeUIService);

  login() {
    const user = { id: '1', name: 'Juan', email: 'juan@example.com' };
    this._dominicodeUIService.setLoggedUser(user);
  }

  logout() {
    this._dominicodeUIService.clearLoggedUser();
  }
}
