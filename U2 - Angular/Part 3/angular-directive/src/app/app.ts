import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SetColorDirective } from './directives/set-color-directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [SetColorDirective, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  color = signal('#fff');
}
