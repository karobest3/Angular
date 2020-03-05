import { Component, OnInit } from '@angular/core';
import { IpService } from './ip.service';

@Component({ 
  selector: 'app-ip',
  template: '<h3>Ip component</h3>'
})
export class IpComponent implements OnInit{
    ngOnInit(): void {
        
    }

    constructor(private ipService: IpService){
    //   this.ipService.getIp()
    //   .then(a => this.a = a)
      
  }
}
