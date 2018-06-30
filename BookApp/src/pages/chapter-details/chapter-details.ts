import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-chapter-details',
  templateUrl: 'chapter-details.html'
})
export class ChapterDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an chapter available as a nav param
    this.selectedItem = navParams.get('chapter');
  }
}
