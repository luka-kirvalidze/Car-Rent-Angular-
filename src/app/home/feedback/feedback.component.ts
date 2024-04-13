import { Component } from '@angular/core';
import { ServiceService } from '../../shared/service.service';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  
  public responsiveOptions:any[] = [
    {
      breakpoint: '1422px',
      numVisible: 1,
      numScroll: 1
  },
  {
    breakpoint: '865px',
    numVisible: 1,
    numScroll: 1,
  }]

  public userArray!:any;

  public commaIcon = faQuoteLeft;

  constructor(private array:ServiceService){
    this.array.getFakeUsers().subscribe(user => {

      this.userArray = user;

      if(this.userArray.data.length > 3){
        this.userArray.data.splice(3, this.userArray.data.length)
      } else if (this.userArray.data.length == 3){
        console.log("array is already cropped")
      }

      console.log(this.userArray.data)
    })
  }
}