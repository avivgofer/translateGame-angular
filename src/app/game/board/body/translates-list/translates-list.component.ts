import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-translates-list',
  templateUrl: './translates-list.component.html',
  styleUrls: ['./translates-list.component.scss']
})
export class TranslatesListComponent implements OnInit {
  @Input() randomWords: string[];
  @Output('grandFun') grandFun: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}
  constructor() {}

  bibaFunc(biba) {
    this.grandFun.emit(biba);
  }
}
