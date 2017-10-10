import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})

export class AddItemPage { // Exports the class AddItemPage so I can use its functions wherever I want in the project

  title;
  description;

  constructor(public navCtrl: NavController, public vc: ViewController) {}

  ionViewDidLoad() { // Loads the add-item page
		
  }

  saveItem(){

    let newItem = {

      title: this.title,
      description: this.description

    };

    this.vc.dismiss(newItem); // Closes the modal when the item is added

  }

  close(){
    this.vc.dismiss(); // Closes the modal when the close button is hit
  }

}
