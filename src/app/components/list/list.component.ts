import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { CardComponent } from './card/card.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products: Product[] = [];

  productsService = inject(ProductsService);

  ngOnInit(){
    this.productsService.getAll().subscribe((products)=>{
      this.products = products;
    });
  }
}
