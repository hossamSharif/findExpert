import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }
  
  chat(){
    this.rout.navigate(['chat']);  
  }

}
