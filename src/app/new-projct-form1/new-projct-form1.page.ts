import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-projct-form1',
  templateUrl: './new-projct-form1.page.html',
  styleUrls: ['./new-projct-form1.page.scss'],
})
export class NewProjctForm1Page implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }
  next(){
    this.rout.navigate(['new-projct-form2']);  
  }
}
