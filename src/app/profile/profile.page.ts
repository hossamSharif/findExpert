import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
type:any = 'portfolio'
  constructor(private rout : Router) { }

  ngOnInit() {
  }
  
  reviews(){
    this.rout.navigate(['reviews']);  
  }
}
