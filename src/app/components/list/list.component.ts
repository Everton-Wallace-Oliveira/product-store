import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { CardComponent } from './card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  template: `
    <h2 mat-dialog-title>Deletar Produto</h2>
    <mat-dialog-content>
      Tem certeza que deseja deletar o produto?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onNo()">Não</button>
      <button
        mat-raised-button
        color="accent"
        (click)="onYes()"
        cdkFocusInitial
      >
        Sim
      </button>
    </mat-dialog-actions>
  `,
})
export class confirmationDialogComponent {
  matSialogRef = inject(MatDialogRef);
  onNo() {
    this.matSialogRef.close(false);
  }
  onYes() {
    this.matSialogRef.close(true);
  }
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products: Product[] = [];

  router = inject(Router);
  matDialog = inject(MatDialog);

  productsService = inject(ProductsService);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    }); //chamada de rota para listar todos os produtos
  }
  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]); // chamada de rota para editar um produto
  }
  onDelete(product: Product) {
    this.matDialog
      .open(confirmationDialogComponent)
      .afterClosed()
      .subscribe((answer: boolean) => {
        if (answer) {
          this.productsService.delete(product.id).subscribe(() => {
            this.products = this.products.filter((p) => p.id !== product.id);
          });
        }
      });
  }
}
