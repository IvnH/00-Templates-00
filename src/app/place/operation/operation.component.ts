import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firtNumber = "";
  secundNumber = "";
  sum = 0;

  getAdd(num1,num2){
    this.sum = parseFloat(num1) + parseFloat(num2);
  }

}
