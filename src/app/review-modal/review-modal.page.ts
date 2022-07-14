import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.page.html',
  styleUrls: ['./review-modal.page.scss'],
})
export class ReviewModalPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }


  async closeModal() { 
    await this.modalController.dismiss();
  }

}
