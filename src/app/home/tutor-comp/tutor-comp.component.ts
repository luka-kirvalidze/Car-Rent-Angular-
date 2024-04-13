import { Component } from '@angular/core';
import { faCalendarCheck, faCar, faMapLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tutor-comp',
  templateUrl: './tutor-comp.component.html',
  styleUrl: './tutor-comp.component.css'
})
export class TutorCompComponent {
  public locationIcon = faMapLocation;
  public carIcon = faCar;
  public calendarIcon = faCalendarCheck

}
