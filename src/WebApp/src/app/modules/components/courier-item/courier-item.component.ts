import { Component, OnInit, Input } from '@angular/core';
import { Courier } from 'src/app/models/courier';

@Component({
  selector: 'app-courier-item',
  templateUrl: './courier-item.component.html',
  styleUrls: ['./courier-item.component.css']
})
export class CourierItemComponent implements OnInit {
  @Input() courier:Courier;
  constructor() { }

  ngOnInit() {
  }

}
