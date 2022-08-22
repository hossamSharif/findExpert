import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-projct-form2',
  templateUrl: './new-projct-form2.page.html',
  styleUrls: ['./new-projct-form2.page.scss'],
})
export class NewProjctForm2Page implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }
  next(){
    this.rout.navigate(['new-projct-form3']);  
  }
}
