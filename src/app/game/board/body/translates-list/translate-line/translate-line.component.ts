import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-translate-line',
  templateUrl: './translate-line.component.html',
  styleUrls: ['./translate-line.component.scss']
})
export class TranslateLineComponent implements OnInit {
  @Input() word: string;
  @Output('parentFun') parentFun: EventEmitter<any> = new EventEmitter();
  constructor() {}
  onClickFunc(event) {
    this.parentFun.emit(event.currentTarget.value);
  }

  ngOnInit(): void {}
}
