import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedService/shared-service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  text: number;
  constructor( private sharedService: SharedService ) { }

  ngOnInit(): void {

    this.sharedService.count.subscribe( c => {
      this.text = c;
    } );

  }

}
