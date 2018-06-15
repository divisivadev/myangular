import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-omg',
  templateUrl: './omg.component.html',
  styleUrls: ['./omg.component.css']
})
export class OmgComponent implements OnInit {

  @Input() ddd;

  constructor() { }

  ngOnInit() {
  }

}
