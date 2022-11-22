import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [];
  loading: boolean = false;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this.loading = true;

    setTimeout(() => {
      this._productService.getListProducts().subscribe((data: Product[]) => {
        this.listProducts = data;
        this.loading = false;
      });
    }, 1000);
  }

  deleteProducts(id: number) {
    this.loading = true;
    this._productService.deleteProduct(id).subscribe(() => {
      this.getListProducts();
    });
  }
}
