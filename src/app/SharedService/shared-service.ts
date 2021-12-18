import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
    providedIn: 'root'
})
export class SharedService {
    counter = 1;
    count: BehaviorSubject<number>;
    constructor() {
 
        this.count = new BehaviorSubject(this.counter);
    }
 
    sum() {
        this.count.next(++this.counter);
    }

    rest(){
        this.count.next( this.counter-- );
    }
}