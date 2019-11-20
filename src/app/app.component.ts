import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amiwCalculator';

  public result = '';


  onClick(k: KeyboardEvent) {
    console.log(k);
    if(k.key !== '0' && k.key !== '1'){
      k.preventDefault();
    }
  }

  addZero(){
    this.result = this.result + '0';
  }

  addOne(){
    this.result = this.result + '1';
  }

	  
  
}
