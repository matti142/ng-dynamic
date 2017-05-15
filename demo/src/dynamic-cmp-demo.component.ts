import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-cmp-demo',
  template: `
    <h2>dynamic-cmp-demo</h2>
    <div *dynamicComponent="content; context: this;"></div>
  `,
})
export class DynamicCmpDemoComponent {
  content: string;
  text = 'foo';
  showText = true;

  ngOnInit() {
    this.fetchAwesomeDocument().then(content => {
      this.content = content;
    });
  }

  onDynamicButtonClicked(msg: string): void {
    console.log('onDynamicButtonClicked:', msg, this);
  }

  fetchAwesomeDocument() {
    return Promise.resolve(`
      <h1>Awesome Document</h1>
      <awesome-button (buttonClicked)="onDynamicButtonClicked($event)" msg="dynamic-cmp">Dynamic HTML</awesome-button>
    `);
  }
}