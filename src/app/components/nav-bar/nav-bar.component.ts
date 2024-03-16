import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
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
