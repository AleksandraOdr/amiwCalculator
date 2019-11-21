import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amiwCalculator';

  public text: string = '';
  public val :number;


  onClick(k: KeyboardEvent) {
    console.log(k);
    if(k.key !== '0' && k.key !== '1'){
      k.preventDefault();
    }
  }

  onKeyUp(){
    console.log(this.text);
  }
   
  onDigitClick(ev : MouseEvent){
    this.text += (ev.target as HTMLElement).textContent;
   }


   textToVal(){
    this.val = parseInt(this.text,2);
   }


	  
  
}
