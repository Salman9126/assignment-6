import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  str:string = "Marvellous Infosystems.";
  
  change(){
    if( this.str == "Marvellous Infosystems."){
      this.str = "Educating for Better tomorrow";
    }else{
      this.str = "Marvellous Infosystems.";
    }
  }

  toUpper(){
    this.str = this.str.toUpperCase();
  }
  
  toLower(){
    this.str = this.str.toLowerCase();
  }

}
