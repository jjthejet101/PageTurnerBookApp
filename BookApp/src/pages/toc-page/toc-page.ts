import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ChapterDetailsPage } from '../chapter-details/chapter-details';

@Component({
  selector: 'page-toc-page',
  templateUrl: 'toc-page.html'
})
export class TocPage {
  icons: string[];
  chapters: Array<{title: string, note: any, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['book'];

    this.chapters = [];
    for(let i = 1; i < 4; i++) {
      const Content = () => {
        if (i=1) { 
          return "function works" 
        } else if (i=2) { 
          return "else if works" 
        } else { 
          return "else works" 
        } 
      };
      this.chapters.push({
        title: 'Chapter ' + i,
        note: Content,
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
