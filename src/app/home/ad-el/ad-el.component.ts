import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ad-el',
  templateUrl: './ad-el.component.html',
  styleUrl: './ad-el.component.css'
})
export class AdElComponent {
  faVideo = faPlay;
  public vidPlay:Boolean = false;

  playVideo(){
    this.vidPlay = !this.vidPlay
    if(this.vidPlay == true){
      Swal.fire({
        title: 'Done',
        text: 'If you want to hide video, press the "watch video" button',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    } else if(this.vidPlay == false ){
      Swal.fire({
        title: 'Done',
        text: 'If you want to open video again, press the "watch video" button',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  }

}
