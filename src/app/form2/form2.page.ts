import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.page.html',
  styleUrls: ['./form2.page.scss'],
})
export class Form2Page implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }
  next(){
    this.rout.navigate(['form3']);  
  }
}
