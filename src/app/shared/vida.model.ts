export class Vida {
  constructor(
    public cheio: boolean,
    public urlVidaCheio: string = './assets/vida_cheio.png',
    public urlVidaVazio: string = './assets/vida_vazio.png'
  ) {}

  public exibeVida(): string {
    if (this.cheio) {
      return this.urlVidaCheio;
    } else {
      return this.urlVidaVazio;
    }
  }
}
