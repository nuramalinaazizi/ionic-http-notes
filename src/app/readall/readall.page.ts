import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Route, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-readall',
  templateUrl: './readall.page.html',
  styleUrls: ['./readall.page.scss'],
})
export class ReadallPage implements OnInit {

  constructor(private httpService: HttpService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.getData()
  }

  booking = []

  getData() {
    this.httpService.getAll().subscribe((resp: any) => {
      this.booking = resp["sheet1"];

    }, err => {

    })

  }
}
