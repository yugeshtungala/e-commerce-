import { Component, OnInit } from '@angular/core';
import { ProservService } from 'src/app/proserv.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private ser:ProservService) { }
getshirts(){
  return this.ser.products;
}
  ngOnInit() {
  }

}
