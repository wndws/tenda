import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClarityModule, ClrModalModule } from "@clr/angular";
import { CommonModule } from '@angular/common';
import { ClarityIcons, envelopeIcon, fishIcon } from '@cds/core/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ClarityModule,
    CommonModule,
    ClrModalModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  turnstileUrl: string = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback";

  openModal = false;

  title = 'Tneda';
  constructor(
    private element: ElementRef
  ) {
    ClarityIcons.addIcons(fishIcon, envelopeIcon);
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.async = true;
    script.src = this.turnstileUrl;

    const div = document.getElementById('script');
    if (div != null) {
      div.insertAdjacentElement('afterend', script);
    }
  }

  email(token: string) {
    console.log(`Challenge Success ${token}`);
  }
}
