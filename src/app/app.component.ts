import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  text:number = 0;
  disableMin: boolean = true;
  disableMax: boolean = false;
  constructor( ) { }

  ngOnInit(): void {
  }

  handleEvent( value: string ){  
    value == '+' ? this.text++ : this.text--;
    this.disableMin = this.text == 0 ;
    this.disableMax = this.text == 20;
  }
}
