import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import Timer from 'easytimer.js';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})

export class ItemDetailPage {

  title;
  description;

  constructor(public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;

    var timer = new Timer();
    $('#chronoExample .startButton').click(function() {
      timer.start();
    });
    $('#chronoExample .pauseButton').click(function() {
      timer.pause();
    });
    $('#chronoExample .stopButton').click(function() {
      timer.stop();
    });
    $('#chronoExample .resetButton').click(function() {
      timer.reset();
    });
    timer.addEventListener('secondsUpdated', function(e) {
      $('#chronoExample .values').html(timer.getTimeValues().toString());
    });
    timer.addEventListener('started', function(e) {
      $('#chronoExample .values').html(timer.getTimeValues().toString());
    });
    timer.addEventListener('reset', function(e) {
      $('#chronoExample .values').html(timer.getTimeValues().toString());
    });
  }

}
