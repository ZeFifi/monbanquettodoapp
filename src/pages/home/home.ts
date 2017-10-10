import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items // Declares items to public, meaning that they could be accessed anywhere.

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() { // Loads the tasks

    this.items = [
      { title: 'hi1', description: 'test1' },
      { title: 'hi2', description: 'test2' },
      { title: 'hi3', description: 'test3' }
    ];

  }

  addItem() { // Adds a task

  }

  viewItem() {

  }

}
