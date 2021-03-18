import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fullname = "Borre River";
  currentDate = new Date();
  fruits  = ['mango','Naranga','Manzana','Banano','Maracuya'];
  user = {name:'Borre River',age:24,email:'borre@example.xyz'}

}
