import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.component.html',
  styleUrls: ['./dicas.component.scss']
})
export class DicasComponent implements OnInit {
  @Input() public dicaPersonagem: string;

  constructor() { }

  ngOnInit() {
  }

}
