import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  convidados:boolean = true;

  @ViewChild('name') name!:ElementRef;
  @ViewChild('tipo') tipo!:ElementRef;
  @ViewChild('status') status!:ElementRef;
  @ViewChild('email') email!:ElementRef;
  @ViewChild('phone') phone!:ElementRef;
  @ViewChild('message') message!:ElementRef;


  constructor() { }

  ngOnInit(): void {
    // this.setData;
  }

  enviar(){
    // console.log(this.name.nativeElement.value)
    // console.log(this.email.nativeElement.value)
    // console.log(this.phone.nativeElement.value)
    // console.log(this.message.nativeElement.value)
    // console.log(this.calendar.nativeElement.value)
    window.open(`mailto:gabriel.brs.gsousa@gmail.com?subject=${'PRECISO ENTRAR EM CONTATO '}&body=${encodeURIComponent('Shalom, Rabino'+'\n'+'\n'+'Eu estou entrando em contato para tratar sobre '+this.tipo.nativeElement.value.toLowerCase()+'\n'+'\n'+this.message.nativeElement.value+'\n'+'\n'+'\n'+'\n'+'À consideração superior, '+'\n'+'\n'+'\n'+this.name.nativeElement.value+'\n'+this.status.nativeElement.value+'\n'+'\n'+'\n'+'Favor retornar mensagem à '+'\n'+'\n'+this.phone.nativeElement.value+'\n'+this.email.nativeElement.value+'\n'+'\n')}`);
  }

  setConvidados(convidado:any){
    this.convidados = convidado;
  }


}
