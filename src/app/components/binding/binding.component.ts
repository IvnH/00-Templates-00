import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  success = 'success';
  error =' error';
  special = 'special';
  hasError = false; /*false o true para ejecutar las condiionales siguientes*/

  multiClasses = ['success','special'];
  conditionalmultiClasses = {
    "success":!this.hasError,
    "error"  : this.hasError
  }

   msg = '';

}
