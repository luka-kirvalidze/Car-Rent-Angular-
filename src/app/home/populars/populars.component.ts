import { Component } from '@angular/core';
import { ServiceService } from '../../shared/service.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-populars',
  templateUrl: './populars.component.html',
  styleUrl: './populars.component.css'
})
export class PopularsComponent {
  responsiveOptions : any[]=[
    {
        breakpoint: '1422px',
        numVisible: 2,
        numScroll: 2
    },
    {
      breakpoint: '865px',
      numVisible: 1,
      numScroll: 1,
    }
  ]

  public arrowIcon = faArrowRight;
  public firstEl!:any;
  public el!:any;
  
  public fullRecieved!:any;

  constructor(private data:ServiceService){
    this.data.getRecomended().subscribe(item => {
      this.firstEl = item;
      while(this.firstEl.length > 1){
        this.firstEl.pop()
      }
      this.el = this.firstEl[0];
      // console.log(this.firstEl)
      // console.log(this.el)
      return
    });
    this.data.getAll().subscribe(item => {
      this.fullRecieved = item

      this.fullRecieved.splice(0, 3);
      
      // console.log(this.fullRecieved)

      return
    })
  }
}
