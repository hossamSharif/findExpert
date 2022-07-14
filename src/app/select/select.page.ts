import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  user :boolean = false
  expert :boolean = false
  constructor(private rout : Router) { }

  ngOnInit() {
  }

  continue(){
    this.rout.navigate(['home']); 
  }

  select(type){
    console.log(type)
    if (type == 'user'){
      if(this.user == true){
        this.user = false
      }else{
        this.user = true

      }
    }

    if (type == 'expert'){
      if(this.expert == true){
        this.expert = false
      }else{
        this.expert = true

      }
    }
    console.log(this.user , this.expert)
 

  }
}
