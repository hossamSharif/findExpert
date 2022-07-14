import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReviewModalPage } from '../review-modal/review-modal.page';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }


  async presentModal(id?, status?) { 
    const modal = await this.modalController.create({
      component: ReviewModalPage ,
       initialBreakpoint :  0.6  ,
        breakpoints:[0, 0.5, 0.75, 0.90],
        componentProps: {
        "item":  "",
        "status":""
        }
    });
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log(dataReturned )
       
      }
    });
 
    return await modal.present(); 
  }


}
