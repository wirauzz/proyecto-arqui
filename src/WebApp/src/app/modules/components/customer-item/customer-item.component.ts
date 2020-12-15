import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {
  @Input() customer:Customer;
  constructor() { }

  ngOnInit() {
  }

}
