import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  public text = '';
  public value = 0;


  onClick(k: KeyboardEvent) {
    console.log(k);
    if (k.key !== '0' && k.key !== '1' && k.key !== '+' && k.key !== '-') {
      k.preventDefault();
    }
  }

  onKeyUp($event: KeyboardEvent) {
    console.log(this.text);
  }

  onDigitClick(ev: MouseEvent) {
    const digit = (ev.target as HTMLElement).textContent;
    if (digit === '1' || digit === '0') {
      this.text += digit;
    } else {
      this.value = this.textToVal();
      this.text += digit;
      console.log(this.value);
    }
  }
  textToVal() {
    return parseInt(this.text, 2);
  }
}
