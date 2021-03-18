import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementation',
  templateUrl: './incrementation.component.html',
  styleUrls: ['./incrementation.component.css']
})
export class IncrementationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  count = 0;
  increementByOne()
  {
    this.count++;
  }

  color = '';
  changeColor(color)
  {
    this.color = color;
  }
  text = '';
  handleKeydown(text){
    this.text = text;
  }

}
