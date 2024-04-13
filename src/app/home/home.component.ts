import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit{

  public slideUp!:any;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".gsap1", {
      duration: 2,
      xPercent: -100,
      ease: "power4.out",
    });
    gsap.from(".gsap2", {
      duration: 2,
      xPercent: 100,
      ease: "power4.out",
    });
    gsap.from(".gsap3", {
      opacity: 0,
      duration: 2.6,
    });
    gsap.from(".gsap4", {
      yPercent: 100,
      duration: .8,
      scrollTrigger: {
        trigger: ".gsap3",
        start: "bottom 72%",
        // markers: true,
      },
    });
    gsap.from(".gsap5", {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsap5",
        start: "top 72%",
        // markers: true,
      }
    });
    gsap.from(".gsap6", {
      opacity: 0,
      duration: 1.3,
      scrollTrigger: {
        trigger: ".gsap6",
        start: "top 72%",
        // markers: true,
      }
    });
    gsap.from(".gsap7", {
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".gsap7",
        start: "top 72%",
        // markers: true,
      }
    });
    gsap.from(".gsap8", {
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".gsap8",
        start: "top 72%",
        // markers: true,
      }
    });
  }

}
