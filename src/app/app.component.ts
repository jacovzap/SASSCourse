import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-sassy-app';


  pressButton(){
      console.log('BOTON PRESIONADO');
  }
}
