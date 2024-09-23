import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  productsService = inject(ProductsService);
  product: Product = inject(ActivatedRoute).snapshot.data['product'];


  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  form = new FormGroup({
    title: new FormControl<string>(this.product.title, {
      nonNullable: true,
      validators: Validators.required,
    }),
    quantidade: new FormControl<string>(this.product.quantidade, {
      nonNullable: true,
      validators: Validators.required,
    }),

  });
  onSubimit() {
    this.productsService.patch(this.product.id, {
      title: this.form.controls.title.value,
      quantidade: this.form.controls.quantidade.value
    }).subscribe(()=>{
      this.matSnackBar.open('Produto editado com sucesso!', 'Ok') // cria um pop-up estilizado
      this.router.navigateByUrl('/');// volta para a home
    });
  }
}
