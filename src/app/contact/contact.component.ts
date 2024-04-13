import { AfterViewInit, Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".contact-form", {
      xPercent: -100,
      duration: 2,
      ease: "power4.out"
    })
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_y8xrab6', 'template_8j7961h', e.target as HTMLFormElement, {
        publicKey: 'Aj3bcbCf1t2ZH0l5B',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

  alerter(){
    Swal.fire({
      title: "Email Sent!",
      text: "Your email will be reviewed as soon as possible.",
      icon: "success"
    });
  }

}
