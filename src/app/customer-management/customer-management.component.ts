import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer'
import { CustomerService } from 'src/app/service/customer.service'

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {
  constructor(private customerService : CustomerService) { }
  listCustomers: Array<Customer>;
  ngOnInit() {
    this.customerService.getListCustomers().subscribe(
      data => {console.log(data);
        this.listCustomers = data ; 
      }
    );
  }

}
