import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-toc-page',
  templateUrl: 'toc-page.html'
})
export class TocPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['book'];

    this.items = [];
    for(let i = 1; i < 4; i++) {
      this.items.push({
        title: 'Chapter ' + i,
        note: 'This is item #' + i,
        icon: 'book'
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
