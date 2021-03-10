import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surnames',
  templateUrl: './surnames.component.html',
  styleUrls: ['./surnames.component.css']
})
export class SurnamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  seleccion: string = ''

}
