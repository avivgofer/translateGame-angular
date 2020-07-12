import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-word',
  templateUrl: './main-word.component.html',
  styleUrls: ['./main-word.component.scss']
})
export class MainWordComponent implements OnInit {
  @Input() mainWord: string;
  constructor() {}

  ngOnInit(): void {}
}
