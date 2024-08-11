import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClarityModule, ClrModalModule } from "@clr/angular";
import { CommonModule } from '@angular/common';
import { ClarityIcons, envelopeIcon, fishIcon } from '@cds/core/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTurnstileModule } from 'ngx-turnstile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ClarityModule,
    CommonModule,
    ClrModalModule,
    NgxTurnstileModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  openModal = false;

  siteKey = '0x4AAAAAAAhCRjirPNYs2P4O';

  title = 'Tneda';

  constructor(
  ) {
    ClarityIcons.addIcons(fishIcon, envelopeIcon);
  }


  sendCaptchaResponse($event: string | null) {
    console.log($event);
  }
}
