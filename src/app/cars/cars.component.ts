import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".gsap1", {
      duration: 3.3,
      opacity: 0,
    });
    gsap.from(".gsap2", {
      duration: 3.3,
      opacity: 0,
    })
  }

}
