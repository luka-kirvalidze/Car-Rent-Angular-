import { Component } from '@angular/core';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subel',
  templateUrl: './subel.component.html',
  styleUrl: './subel.component.css'
})
export class SubelComponent {
  public userIcon = faUser;
  public emailIcon = faEnvelope;

  public userName!:any;
  public userEmail!:any;


  alerter(){
    console.log(this.userName, this.userEmail)
    if(this.userName && this.userEmail){
      Swal.fire({
        title: "Done",
        text: "You will get news from us every week",
        icon: "success"
      });
    }else if(this.userName){
      Swal.fire({
        title: "Error",
        text: "You need to fill the email form too",
        icon: "error"
      });
    }else if(this.userEmail){
      Swal.fire({
        title: "Error",
        text: "You need to fill the name form too",
        icon: "error"
      });
    }else {
      Swal.fire({
        title: "Error",
        text: "You need to fill the form",
        icon: "error"
      });
    }
  }
}
