import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCar, faUsers } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-filtered-cars',
  templateUrl: './filtered-cars.component.html',
  styleUrl: './filtered-cars.component.css'
})
export class FilteredCarsComponent implements AfterViewInit {
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

  public finalData!:any;

  public link!:any;

  public httpData!:any;
  public httpDataRecieved!:any
  public data!:any;

  constructor(private array:ActivatedRoute, private http:HttpClient){
    this.array.queryParams.subscribe(data => {
      console.log(data);

      this.finalData = Object.values(data); //გადაყავს ობიექტი ერეიში.
      // console.log(this.finalData)

      this.link = this.finalData[0];
      // console.log(this.link)

      this.httpData = this.http.get(this.link).subscribe(data => {

        this.httpDataRecieved = Object.values(data);
        console.log(this.httpDataRecieved)

        this.httpDataRecieved.forEach((element:any) => {

          if(Array.isArray(element)){ //Array.isArray() ამოწმებს არის თუ არა ელემენტი ერეი.
            this.data = element;
            console.log(this.data)
          }else{
            console.log("err")
          }
        });
      });

    })

  }

  public person = faUsers;
  public car = faCar;
  public cars!:any;

  clicker(car:any){
    Swal.fire({
      title: `<strong>${car.brand} ${car.model}</strong>`,
      icon: 'info',
      html: `
        <p class="card-text">
          ადგილი/Seats : ${car.capacity}
        </p>
        <p>ქალაქი/City: ${car.city}</p>
        <p>გამოშვების წელი/Release year: ${car.year}</p>
        <p>ავზი/Gas tank: ${car.fuelCapacity}</p>
        <p>გადაცემათა კოლოფი/Transmission: ${car.transmission}</p>
        <h2 style="color: rgb(100, 100, 100)" > $${car.price} / Day </h2>
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "ქირაობა / Order",
      confirmButtonColor: "#22bb33",
      cancelButtonText: `შეჩერება / Cancel`,
      cancelButtonColor: "#bb2124",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: `<strong>${car.brand} ${car.model}</strong>`,
          icon: 'warning',
          html: `
            <h5 class="card-title">Booking information:</h5>
            <input style="background-color: rgb(100, 100, 100);
            color: white;
            width: 320px;
            border: 2px solid rgb(100, 100, 100);
            border-radius: 20px;
            padding: 15px;
            margin-bottom: 10px;
            margin-top: 10px;" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="Pick the date &#128197;">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">+995 🇬🇪</span>
              </div>
              <input type="number" class="form-control" aria-label="Default" placeholder="555 11 22 33" aria-describedby="inputGroup-sizing-default">
            </div>
            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Your name">
            <input type="text" class="form-control" style="margin-top: 15px; margin-bottom: 10px;" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Your email">
          `,
          confirmButtonText: "ქირაობა / Order",
          confirmButtonColor: "#22bb33",
          showCancelButton: true,
          cancelButtonText: `შეჩერება / Cancel`,
          cancelButtonColor: "#bb2124",
        });
      } else if (result.isDenied) {
        console.log("denied");
      }
    });
  }


}
