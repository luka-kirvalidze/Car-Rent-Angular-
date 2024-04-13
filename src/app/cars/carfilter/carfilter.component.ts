import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCalendar, faCar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carfilter',
  templateUrl: './carfilter.component.html',
  styleUrl: './carfilter.component.css'
})
export class CarfilterComponent {

  constructor(private route: Router){}

  public locationIc = faLocationDot;
  public carIcon = faCar;
  public calendarIcon = faCalendar;

  public filLink:String[] = [];

  public inpLocation!:any;
  public inpCapacity!:any;
  public startYear!:any;
  public endYear!:any;

  linkCreator(){
    // console.log(this.inpLocation, this.inpBrand, this.startYear, this.endYear)
    if(this.inpLocation && this.inpCapacity && this.startYear && this.endYear){
      this.filLink.push(`https://rentcar.stepprojects.ge/api/Car/filter?capacity=${this.inpCapacity}&startYear=${this.startYear}&endYear=${this.endYear}&city=${this.inpLocation}`)
      console.log("everything")
    }else if(this.inpLocation == null && this.inpCapacity && this.startYear && this.endYear){
      this.filLink.push(`https://rentcar.stepprojects.ge/api/Car/filter?capacity=${this.inpCapacity}&startYear=${this.startYear}&endYear=${this.endYear}`)
      // console.log("without location", this.inpLocation, this.inpCapacity, this.startYear, this.endYear)
    }else if(this.inpLocation && this.inpCapacity == null && this.startYear && this.endYear){
      Swal.fire({
        title: "Error",
        text: "Car capacity is required",
        icon: "error"
      });
      return
    }else if(this.inpLocation && this.inpCapacity && this.startYear == null && this.endYear){
      this.filLink.push(`https://rentcar.stepprojects.ge/api/Car/filter?capacity=${this.inpCapacity}&endYear=${this.endYear}&city=${this.inpLocation}`)
    }else if(this.inpLocation && this.inpCapacity && this.startYear && this.endYear == null){
      this.filLink.push(`https://rentcar.stepprojects.ge/api/Car/filter?capacity=${this.inpCapacity}&startYear=${this.startYear}&city=${this.inpLocation}`)
    }else if(this.inpLocation == null && this.inpCapacity == null && this.startYear == null && this.endYear == null){
      Swal.fire({
        title: "Error",
        text: "Fill the form first.",
        icon: "error"
      });
      return
    }else {
      Swal.fire({
        title: "Error",
        text: "unexpected error",
        icon: "error"
      });
      return
    }

    // console.log(this.filLink)

    this.route.navigate(
      ['/filteredCars'],
      { queryParams: this.filLink }
    )
  }
}
