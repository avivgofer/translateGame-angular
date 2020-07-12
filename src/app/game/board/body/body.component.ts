import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  constructor() {}
  mainWord = '';
  randomWords = [];
  words = [
    'blue',
    'red',
    'black',
    'aqua',
    'purple',
    'yellow',
    'brown',
    'green'
  ];

  translates = ['כחול', 'אדום', 'שחור', 'תכלת', 'סגול', 'צהוב', 'חום', 'ירוק'];
  originTranslates = [
    'כחול',
    'אדום',
    'שחור',
    'תכלת',
    'סגול',
    'צהוב',
    'חום',
    'ירוק'
  ];
  ngOnInit(): void {
    for (let i = 0; i < 6; i++) {
      let randNumber = Math.floor(Math.random() * this.translates.length);
      this.randomWords.push(this.translates.splice(randNumber, 1)[0]);
      if (i === 0) {
        this.mainWord = this.words[randNumber];
      }
    }
  }
  grandBiba(b) {
    let isSuccess =
      this.words.indexOf(this.mainWord) === this.originTranslates.indexOf(b);
    isSuccess ? alert('Good!!!') : alert('Wrong!!!');
  }
}
