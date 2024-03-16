import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inscrever',
  templateUrl: './inscrever.component.html',
  styleUrls: ['./inscrever.component.scss']
})
export class InscreverComponent implements OnInit {

  convidados:boolean = true;

  @ViewChild('name') name!:ElementRef;
  @ViewChild('tipo') tipo!:ElementRef;
  @ViewChild('status') status!:ElementRef;
  @ViewChild('calendar') calendar!:ElementRef;
  @ViewChild('email') email!:ElementRef;
  @ViewChild('phone') phone!:ElementRef;
  @ViewChild('message') message!:ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  enviar(){

    if(this.convidados===false){
      window.open(`mailto:gabriel.brs.gsousa@gmail.com?subject=${'INSCRIÇÃO AO '+this.tipo.nativeElement.value}&body=${encodeURIComponent('Shalom, Rabino'+'\n'+'\n'+'Eu '+this.name.nativeElement.value+' estou me inscrevendo ao '+this.tipo.nativeElement.value.toLowerCase()+' do dia '+this.calendar.nativeElement.value+'\n'+'\n'+'E, estou levando acompanhantes que são: '+'\n'+'\n'+this.message.nativeElement.value+'\n'+'\n'+'\n'+'À disposição superior, '+'\n'+'\n'+'\n'+this.name.nativeElement.value+'\n'+this.status.nativeElement.value+'\n'+'\n'+'Caso precise entrar em contato comigo, '+'\n'+'\n'+this.phone.nativeElement.value+'\n'+this.email.nativeElement.value+'\n'+'\n')}`);
    }
    if(this.convidados===true){
      window.open(`mailto:gabriel.brs.gsousa@gmail.com?subject=${'INSCRIÇÃO AO '+this.tipo.nativeElement.value}&body=${encodeURIComponent('Shalom, Rabino'+'\n'+'\n'+'Eu '+this.name.nativeElement.value+' estou me inscrevendo ao '+this.tipo.nativeElement.value.toLowerCase()+' do dia '+this.calendar.nativeElement.value+'\n'+'\n'+'\n'+'À disposição superior, '+'\n'+'\n'+'\n'+this.name.nativeElement.value+'\n'+this.status.nativeElement.value+'\n'+'\n'+'Caso precise entrar em contato comigo, '+'\n'+'\n'+this.phone.nativeElement.value+'\n'+this.email.nativeElement.value+'\n'+'\n')}`);
    }
    console.log(this.name.nativeElement.value)
    console.log(this.email.nativeElement.value)
    console.log(this.phone.nativeElement.value)
    console.log(this.message.nativeElement.value)
  }

  setConvidados(convidado:any){
    this.convidados = convidado;
  }
}
