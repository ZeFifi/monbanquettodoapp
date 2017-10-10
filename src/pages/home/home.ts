import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = []; // Declares items to public, meaning that they could be accessed anywhere.

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() { // Loads the tasks

  }

  addItem() {

    let addModal = this.modalCtrl.create(AddItemPage);
    // call back when modal dismissed
    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });
    addModal.present();

  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  saveItem(item) {
    this.items.push(item);
  }

}
