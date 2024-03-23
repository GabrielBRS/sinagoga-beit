import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-user',
  templateUrl: './nav-bar-user.component.html',
  styleUrls: ['./nav-bar-user.component.scss']
})
export class NavBarUserComponent implements OnInit {
  showQuemSomos:boolean = false;
  showParashot:boolean = false;
  showFestas:boolean = false;

  constructor() { }

  ngOnInit() {
    this.functionShowQuemSomos;
    this.functionShowParashot;
    this.functionShowFestas;
  }

  functionShowQuemSomos(show:any){
    this.showQuemSomos = !this.showQuemSomos;
  }

  functionShowParashot(show:any){
    this.showParashot = !this.showParashot;
  }

  functionShowFestas(show:any){
    this.showFestas = !this.showFestas;
  }

}
