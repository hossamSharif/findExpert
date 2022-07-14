import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-price',
  templateUrl: './best-price.page.html',
  styleUrls: ['./best-price.page.scss'],
})
export class BestPricePage implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }
  
  proposal(){
    this.rout.navigate(['proposal']);  
  }
}
