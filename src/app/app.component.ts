import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClarityModule, ClrModalModule } from "@clr/angular";
import { CommonModule } from '@angular/common';
import { ClarityIcons, envelopeIcon, fishIcon } from '@cds/core/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTurnstileModule } from 'ngx-turnstile';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ClarityModule,
    CommonModule,
    ClrModalModule,
    NgxTurnstileModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  openModal = false;
  secretData$: Observable<{ email: string, linkedin: string }> = of({ email: "", linkedin: "" });

  siteKey = '0x4AAAAAAAhCRjirPNYs2P4O';

  title = 'Tneda';

  constructor(
    private http: HttpClient
  ) {
    ClarityIcons.addIcons(fishIcon, envelopeIcon);
  }


  sendCaptchaResponse($event: string | null) {
    if ($event != null) {
      let formData: FormData = new FormData();
      formData.append("cf-turnstile-response", $event);
      this.secretData$ = this.http.post<{ email: string, linkedin: string }>("https://naninuneda.com/turnstile", formData);
    }
  }
}
