import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.scss']
})
export class ProgressoComponent implements OnInit, OnChanges {
  @Input() public progresso: number;

  constructor() {}

  ngOnChanges() {
    document.getElementById('progressbar').style.width = (this.progresso.toString() + '%');
  }
  ngOnInit() {}
}
