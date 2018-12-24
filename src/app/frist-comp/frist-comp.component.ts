import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frist-comp',
  templateUrl: './frist-comp.component.html',
  styleUrls: ['./frist-comp.component.css']
})
export class FristCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  call(){
    return "Marvellous Infosystems";
  }

}
