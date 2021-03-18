import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  age = 17;

  color = 'green';

    fruits  = ['mango','Naranga','Manzana','Banano','Maracuya'];

    users =[
      {
        name:'Alicia',
        email:'ali@gmail.com',
        phone:'1002180355'
      },
      {
        name:'Punta',
        email:'pun@gmail.com',
        phone:'1002180355'
      },
      {
        name:'Sarate',
        email:'sar@gmail.com',
        phone:'1002180355'
      },
      {
        name:'Boca',
        email:'boc@gmail.com',
        phone:'1002180355'
      },
      {
        name:'Laboped',
        email:'lab@gmail.com',
        phone:'1002180355'
      }
    ]

}
