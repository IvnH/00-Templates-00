import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstName = 'Carliños';
  lastName = 'Carioca';
  email = 'ccarioca@example.xyz';
  phone = '00121313';
  age = '24';
  hobbies = ['Futbol', 'Peliculas Ciencia Ficcion', 'Selva'];
  address = {
    street: '0124 Av. Gatos',
    City: 'RiberCan ',
    state: 'City'
  }

}
