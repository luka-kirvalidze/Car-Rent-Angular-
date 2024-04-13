import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUSComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".gsap1", {
      duration: 2,
      ease: "power4.out",
      xPercent: -100,
    })
    gsap.from(".gsap2", {
      duration: 2,
      ease: "power4.out",
      xPercent: 100,
    })
    gsap.from(".gsap3", {
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".gsap3",
        start: "top 55%",
        // markers: true,
      }
    })
  }

}
