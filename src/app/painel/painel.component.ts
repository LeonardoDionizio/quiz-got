import { Component, OnInit, EventEmitter, Output, OnDestroy, PipeTransform } from '@angular/core';


import { Personagem } from './../shared/personagem.model';
import { PERSONAGENS } from './personagem-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {
  public personagens: Personagem[] = PERSONAGENS;

  public instrucao = 'Quem é este personagem:';
  public resposta = '';
  public msg: string;

  public rodada = 0;
  public rodadaPersonagem: Personagem;

  public dicaPersonagem: string;

  public progresso = 0;

  public tentativas = 5;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  public atualizaResposta(resposta: Event): void {
    this.msg = '';
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    this.resposta = this.resposta.trim().toLowerCase();
    if (this.rodadaPersonagem.nomePersonagem === this.resposta) {
      // trocar pergunta da rodada
      this.rodada += 1;

      // progresso
      this.progresso += 100 / this.personagens.length;
      console.log(this.progresso);

      //
      if (this.rodada >= this.personagens.length) {
        this.encerrarJogo.emit('vitoria');
      }

      // atualiza o obj rodadaFrase
      this.atualizaRodada();
    } else {
      this.msg = 'Que pena, você precisa assistir um pouco mais a série!';
      // decrementar a variavel tentativas
      this.tentativas -= 1;

      if (this.tentativas === 0) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    // define a frase a ser traduzida
    this.rodadaPersonagem = this.personagens[this.rodada];
    this.dicaPersonagem = this.rodadaPersonagem.dicaPersonagem;
    // limpar resposta
    this.resposta = '';
  }
}
