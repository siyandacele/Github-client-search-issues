import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cci-loader',
  templateUrl: './loader.component.html',
})
export class LoaderComponent implements OnInit {
  @Input() range: number = 1;
  @Input() height: string | undefined;
  loadNumbers = [...Array(this.range).keys()];
  ngOnInit(): void {
    this.loadNumbers = [...Array(this.range).keys()];
  }
}
