import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  public text = '';
  public val = 0;


  onClick(k: KeyboardEvent) {
    console.log(k);
    if (k.key !== '0' && k.key !== '1') {
      k.preventDefault();
    }
  }

  onKeyUp($event: KeyboardEvent) {
    console.log(this.text);
  }

  onDigitClick(ev: MouseEvent) {
    this.text += (ev.target as HTMLElement).textContent;
  }


  textToVal() {
    this.val = parseInt(this.text, 2);
  }
}
