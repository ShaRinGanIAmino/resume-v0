import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Chebbah Med Amine';
  menuItems = [
    { label: 'About', routerLink: '/' },
    { label: 'Skills', routerLink: '/skills' },
    { label: 'Experience', routerLink: '/experience' },
    { label: 'Projects', routerLink: '/projects' },
    { label: 'Contact', routerLink: '/contact' },
  ];

  downloadCV() {
    window.open('/CV.pdf', '_blank');
  }
}
