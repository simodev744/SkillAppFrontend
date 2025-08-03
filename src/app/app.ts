import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CompetenceComponent} from './competence/competence';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('AppskillFrontend');
}
