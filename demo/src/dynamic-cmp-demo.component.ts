import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-cmp-demo',
  template: `
    <h2>dynamic-cmp-demo</h2>
    <div *dynamicComponent="content; context: self;"></div>
    <awesome-button msg="static">Static HTML</awesome-button>
    <hr/>
    text: <input type="text" [(ngModel)]="text" /><br/>
    <textarea [(ngModel)]="content" rows="10" cols="50"></textarea>
  `,
})
export class DynamicCmpDemoComponent {
  content: string;
  text = 'foo';
  self = this;
  showText = true;

  ngOnInit() {
    this.fetchAwesomeDocument().then(content => {
      this.content = content;
    });
  }

  onDynamicButtonClicked(msg: string): void {
    console.log('onDynamicButtonClicked:', msg);
  }

  fetchAwesomeDocument() {
    return Promise.resolve(`<article>
      <h1>Awesome Document</h1>
      <div>
        <p>{{text}}</p>
        <awesome-button (buttonClicked)="onDynamicButtonClicked($event)" msg="dynamic-cmp">Dynamic HTML</awesome-button>
      </div>
    </article>`);
  }
}