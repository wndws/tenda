import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClarityModule, ClrModalModule } from "@clr/angular";
import { CommonModule } from '@angular/common';
import { ClarityIcons, envelopeIcon, fishIcon } from '@cds/core/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTurnstileModule } from 'ngx-turnstile';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
  fetchingUserInformation = true;
  secretData = {};

  siteKey = '0x4AAAAAAAhCRjirPNYs2P4O';

  title = 'Tneda';

  constructor(
    private http : HttpClient
  ) {
    ClarityIcons.addIcons(fishIcon, envelopeIcon);
  }


  sendCaptchaResponse($event: string | null) {
    if($event != null){
      let formData: FormData = new FormData();
      formData.append("cf-turnstile-response",$event);
      this.http.post<{}>("https://naninuneda.com/turnstile",formData).subscribe(
        res=>{
          this.secretData = res;
          this.fetchingUserInformation = false;
        });
    }
  }
}
