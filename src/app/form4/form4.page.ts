import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form4',
  templateUrl: './form4.page.html',
  styleUrls: ['./form4.page.scss'],
})
export class Form4Page implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }
  next(){
    this.rout.navigate(['form5']);  
  }
}
