import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form5',
  templateUrl: './form5.page.html',
  styleUrls: ['./form5.page.scss'],
})
export class Form5Page implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  
  }

  next(){
    this.rout.navigate(['booking-details']);  
  }
}
