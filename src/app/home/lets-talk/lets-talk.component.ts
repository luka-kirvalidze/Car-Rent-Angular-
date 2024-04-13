import { Component } from '@angular/core';
import { faEnvelope, faLocation, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lets-talk',
  templateUrl: './lets-talk.component.html',
  styleUrl: './lets-talk.component.css'
})
export class LetsTalkComponent {
  public phoneIcon = faPhoneVolume;
  public emailIcon = faEnvelope;
  public locationIcon = faLocationDot;
}
