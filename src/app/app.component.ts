import { Component } from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <ac-header></ac-header>cd
    <div class="page">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
