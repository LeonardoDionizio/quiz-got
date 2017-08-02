import { Vida } from './../shared/vida.model';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() public tentativas: number;

  public vidas: Vida[] = [new Vida(true), new Vida(true), new Vida(true) , new Vida(true), new Vida(true)];
  constructor() {}

  ngOnChanges() {
    // this.tentativas
    // this.vidas.length
    if (this.tentativas !== this.vidas.length) {
      const indice = this.vidas.length - this.tentativas;
      this.vidas[indice - 1].cheio = false;
    }
  }

  ngOnInit() {}
}
