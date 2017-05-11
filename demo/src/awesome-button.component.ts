import { Component, ViewChild, ElementRef, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { OnMount } from '../../index';

@Component({
  selector: 'awesome-button',
  template: `<button (click)="onClick()" #innerContent><ng-content></ng-content></button>`,
})
export class AwesomeButtonComponent implements OnMount, OnInit {
  @Input() msg: string;
  @Output() buttonClicked = new EventEmitter();
  @ViewChild('innerContent') innerContent: ElementRef;

  dynamicOnMount(attr: Map<string, string>, innerHTML: string, el: any) {
    this.msg = attr.get('msg');
    this.innerContent.nativeElement.innerHTML = innerHTML;
    console.log(`onMount: ${this.msg}`);
  }

  ngOnInit() {
    console.log(`onInit: ${this.msg}`);
  }

  onClick() {
    console.log(`clicked: ${this.msg}`);
    this.buttonClicked.emit('awesome-button clicked!');
  }
}
