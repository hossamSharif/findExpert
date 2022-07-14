import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.page.html',
  styleUrls: ['./proposal-details.page.scss'],
})
export class ProposalDetailsPage implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }
  
  profile(){
    this.rout.navigate(['profile']);  
  }
}
