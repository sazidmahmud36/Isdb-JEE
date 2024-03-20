import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  p:any =[];

  constructor(private myProduct: ProductService) { 
    this.p = this.myProduct.getdata().slice();
  }

  ngOnInit(): void {
  }

}
