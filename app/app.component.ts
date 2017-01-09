import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<button [@myTrigger]='state'>My Button</button>`,
  styles: [],
  animations: [
    trigger('myTrigger', [
      //state()
      //transition()
    ])
  ]
})
export class AppComponent  { 
  name = 'Angular'; 
  state: string = 'small';
}
