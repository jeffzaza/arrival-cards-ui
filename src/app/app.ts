import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AmplifyAuthenticatorModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('arrival-cards-ui');
}
