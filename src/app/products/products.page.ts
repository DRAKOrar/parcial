import { ProductService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  productos: any[] = [];
  categorias: any[] = []; 
  categoriaSeleccionada: string = ''; 
  nuevoProducto: any = {
    title: '',
    description: '',
    price: 0,
    images: ['']
  };

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.obtenerTodosLosProductos();
    this.obtenerTodasLasCategorias();
  }

  obtenerTodosLosProductos() {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.productos = data;
    });
  }

  obtenerTodasLasCategorias() {
    this.productService.getAllCategories().subscribe((data: any) => {
      this.categorias = data;
    });
  }

  filtrarPorCategoria(idCategoria: string) {
    this.productService.getProductsByCategory(idCategoria).subscribe((data: any) => {
      this.productos = data;
    });
  }

  agregarNuevoProducto() {
    this.productService.addProduct(this.nuevoProducto).subscribe((data: any) => {
      this.nuevoProducto = { title: '', description: '', price: 0, images: [''] };
      this.obtenerTodosLosProductos();
    });
  }

  eliminarProducto(idProducto: string) {
    this.productService.deleteProduct(idProducto).subscribe(() => {
      this.obtenerTodosLosProductos();
    });
  }

}
