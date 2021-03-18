import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  data;
  constructor() { }

  ngOnInit(): void {
  }

  Register(regForm:NgForm){
    if (regForm.valid) {
      this.data = regForm.value;
    }
  }

}
