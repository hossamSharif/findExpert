import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-experts',
  templateUrl: './experts.page.html',
  styleUrls: ['./experts.page.scss'],
})
export class ExpertsPage implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }

  next(){
    this.rout.navigate(['form1']);  
  }
  
}
