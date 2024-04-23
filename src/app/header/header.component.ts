import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  pageTitle='My APP';

  constructor() {
    console.log('constructor ejecutado');
  }

  onDataCheck(e:any){
    console.log(e);
  }

}
