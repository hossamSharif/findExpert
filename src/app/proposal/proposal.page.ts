import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.page.html',
  styleUrls: ['./proposal.page.scss'],
})
export class ProposalPage implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }
proposalDetails(){
  this.rout.navigate(['proposal-details']);  
  
}
}
