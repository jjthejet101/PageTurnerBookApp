import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ChapterDetailsPage } from '../chapter-details/chapter-details';

@Component({
  selector: 'page-toc-page',
  templateUrl: 'toc-page.html'
})
export class TocPage {
  icons: string[];
  chapters: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['book'];

    this.chapters = [];
    for(let i = 1; i < 4; i++) {
      this.chapters.push({
        title: 'Chapter ' + i,
        note: 'This is item #' + i,
        icon: 'book'
      });
    }
  }

  chapterTapped(event, chapter) {
    this.navCtrl.push(ChapterDetailsPage, {
      chapter: chapter
    });
  }
}
