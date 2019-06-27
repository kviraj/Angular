import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name="Angular's first project";
  car='bmw i8';
  isUnchanged=true;
  public hasError=false;
  allowNewServer: boolean;
  public greeting="";
  public saving="";

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
   }

  ngOnInit() {
  }

  onClick(){
    console.log('Welcome to Event binding');
    // document.getElementById("demos").innerHTML = "This is Sparta";
    this.greeting='This is sparta';
  }

  onSave(event){
    console.log(event);
    this.saving=event.type;
  }

}
