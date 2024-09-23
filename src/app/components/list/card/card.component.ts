import { Component, computed, EventEmitter, input, Output, output } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  product = input.required<Product>()

  @Output() edit = new EventEmitter();//emiti um evento quando é clicado o editar na interface

  productTitle = computed(()=> this.product().title);
  productQtd = computed(()=> this.product().quantidade);


}

