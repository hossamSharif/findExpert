import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-virification',
  templateUrl: './virification.page.html',
  styleUrls: ['./virification.page.scss'],
})
export class VirificationPage implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }
  home(){
    this.rout.navigate(['tabs/home']);  
  }
}
