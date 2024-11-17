import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    
      <h1 class="staticText">Marvellous Infosystems</h1>
      <input type="text" />
    
  `,
  styles: [`
    .staticText {
      color: blue;
    }

    

    
  `]
})
export class AppComponent {
  title = 'marvellous-app';
}
