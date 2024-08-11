import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Route, Router } from '@angular/router';
import { IonDatetime, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {

  constructor(private httpService: HttpService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  bookingId = ""
  booking: any

  readPressed() {
    this.httpService.getById(parseInt(this.bookingId)).subscribe((resp: any) => {
      this.booking = resp["sheet1"]

    }, err => {

    })
  }

}
