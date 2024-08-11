import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClarityModule } from "@clr/angular";
import { CommonModule } from '@angular/common';
import { ClarityIcons, fishIcon } from '@cds/core/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ClarityModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tneda';
  constructor(){
    ClarityIcons.addIcons(fishIcon);
  }
}
