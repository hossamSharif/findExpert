import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form3',
  templateUrl: './form3.page.html',
  styleUrls: ['./form3.page.scss'],
})
export class Form3Page implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }
  next(){
    this.rout.navigate(['form4']);  
  }
}
