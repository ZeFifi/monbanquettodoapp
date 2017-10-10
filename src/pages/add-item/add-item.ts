import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item-page',
  templateUrl: 'add-item.html'
})

// Exports the class AddItemPage so I can use its functions wherever I want in the project
export class AddItemPage {

  title;
  description;

  constructor(public navCtrl: NavController, public vc: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello AddItemPage Page');
  }

  saveItem(){

    let newItem = {

      title: this.title,
      description: this.description

    };

    this.vc.dismiss(newItem);

  }

  close(){
    this.vc.dismiss();
  }

}
