import {CommonModule} from '@angular/common';
import {Component,inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductService} from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular18 - InMemoryWebApiModule';
  products$!: Observable<any[]>;

  private productService = inject(ProductService);

  constructor() {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }
}
