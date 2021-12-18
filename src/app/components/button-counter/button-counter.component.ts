import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/SharedService/shared-service';


@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.css']
})
export class ButtonCounterComponent implements OnInit {

  @Input() value: string;
  disabled: boolean;
  currentCount: number;

  constructor( private sharedService: SharedService ) {  }

  ngOnInit(): void {  
    this.sharedService.count.subscribe( count => {
      this.currentCount = count;
    } );
  }

  handleClick(): void{
        if( this.value == '+' ){
          this.sharedService.sum();
          this.disabled = this.currentCount == 20;
        }else{
          this.sharedService.rest();
          this.disabled = this.currentCount == 0;
        }
  }

}
