import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fetch-operator',
  templateUrl: './fetch-operator.component.html',
  styleUrls: ['./fetch-operator.component.css']
})
export class FetchOperatorComponent implements OnInit {
  
  @Input() srchCity: string;
  @Output() operator : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  send(){
    console.log("Send method is fired");
    if(this.srchCity === 'chennai'){ //triple = checks value and type double= checks value only
      this.operator.emit('Ramesh 98402020');
    } else {
      this.operator.emit('Suresh 88702020');
    }
  }
}
