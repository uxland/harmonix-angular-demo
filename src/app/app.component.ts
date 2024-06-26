import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'angular-module';
  counter = 0;

  incrementCounter() {
    this.counter++;
  }
}
