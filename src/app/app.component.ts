import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'educativeio-cloned-with-angular';

  doSmth(): void {
    console.log('Did smth!');
  }
}
