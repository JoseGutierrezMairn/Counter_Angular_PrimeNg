import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.css']
})
export class ButtonCounterComponent implements OnInit {

  @Input() value: string;
  @Input() disabled: boolean;
  @Output() myEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor( ) { 
   }

  ngOnInit(): void {  }

  handleClick(): void{
    this.myEvent.emit(this.value);
    
  }

}
