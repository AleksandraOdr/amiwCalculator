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
  public sign = '';


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
      if (this.value === 0) {
        this.value = this.textToVal();
        this.sign = digit;
        this.clean();
      } else {
        if (digit === '+') {
          this.value = this.value + this.textToVal();
          this.clean();
        } else {
          this.value = this.value - this.textToVal();
          this.clean();
        }
      }
    }
  }

  textToVal() {
    return parseInt(this.text, 2);
  }

  onResult() {

    if (this.sign === '+') {
      this.value = this.value + this.textToVal();
    } else {
      this.value = this.value - this.textToVal();
    }
    this.text = this.value.toString(2);
    this.value = 0;
  }

  clean() {
    this.text = '';
  }

  onClean() {
    this.text = '';
    this.value = 0;
  }
}
