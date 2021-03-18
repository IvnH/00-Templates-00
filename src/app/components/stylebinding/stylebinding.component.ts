import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  textColor = 'green';
  textStyle = {
    color: 'blue',
    fontStyle : 'italic',
    textDecoration : 'underline'
  };
  hasError = true; //para combiar el estylo

}
