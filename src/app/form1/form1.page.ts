import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.page.html',
  styleUrls: ['./form1.page.scss'],
})
export class Form1Page implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }

  next(){
    this.rout.navigate(['form2']);  
  }
}
