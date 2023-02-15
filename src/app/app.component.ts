import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ 
    trigger('enlarge', [ 
       state('start', style({ 
          height: '200px', 
          color: 'red',
       })), 
       state('end', style({ 
          height: '400px', 
          color: 'blue',
          background: 'yellowgreen',
          border: '2px solid black',
       })), 
       transition('start => end', [ 
          animate('1s') 
       ]), 
       transition('end => start', [ 
          animate('0.5s') 
    ]) ]), 
    trigger('rotate', [
      state('left', style({
        transform: 'rotate(360deg)'
      })),
      state('right', style({
        transform: 'rotate(-360deg)'
      })),
      transition('left => right', [
        animate('1.5s')
      ]),
      transition('right => left', [
        animate('1.5s')
      ]),
    ])
 ]
})
export class AppComponent {
  title = 'Nested Routing';
  isEnlarge: boolean = false;
  buttonText: string = "Large";
  rotateText = "Left";
  isRotate:boolean = false;


  triggerAnimation() {
     this.isEnlarge = !this.isEnlarge;

     if(this.isEnlarge) 
        this.buttonText = "Small";
     else
        this.buttonText = "Large";
  }
  rotation(){
    this.isRotate = !this.isRotate;

    if(this.isRotate) 
       this.rotateText = "Right";
    else
       this.rotateText = "Left";
  }
}

