import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Route, Router } from '@angular/router';
import { IonDatetime, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private httpService: HttpService, private router: Router, private toastCtrl: ToastController) { }

  booking = {
    "name": "",
    "email": "",
    "address": "",
    "pickup": Date(),
    "sent": Date(),
    "motor": ""
  }

  ngOnInit() {
  }

  sendData() {
    this.httpService.createBooking(this.booking).subscribe(resp => {
      console.log(resp)
      this.router.navigate(['/'])
      this.showToast()

    }
      , err => {
        console.log(err)
      })

  }

  async showToast() {
    const toast = await this.toastCtrl.create({
      message: "Booking created",
      duration: 2000
    })
    toast.present()
  }



}
