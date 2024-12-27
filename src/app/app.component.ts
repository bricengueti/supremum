import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'supremum_project';
  isMenuOpen = false; 
  toggleMenu() { 
    console.log('oui');
    
    this.isMenuOpen = !this.isMenuOpen; 
  }
}
