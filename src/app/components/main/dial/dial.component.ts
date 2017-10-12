import { Component, Input} from '@angular/core';

@Component({
  selector: 'svg-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.sass']
})
export class DialComponent  {

 @Input() level;

  circle = {
    circ: 263.89,
    
    getDashOffset(percent) {
      return -this.circ + this.circ * percent / 100
    }
  } 

}
