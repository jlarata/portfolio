import { Component, Input, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})

export class ListaProductoComponent implements OnInit {

  @Input() user: string;

  //array de productos
  productos: Producto[] = [];
  data: any;
  listadeproductos: String = 'lalala';

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.cargarProductos();
    
  }

  //el siguiente método es el que se sscribe al observable que devuelve el cliente http.
  // o sea, donde la respuesta del REST devuelve una lista de productos que se almacenan en el array.
  cargarProductos(): void {
    this.productoService.lista().subscribe(data => {
      this.productos = data;
    },
    (err: any) => {
      console.log(err);
    }
    );
  }

  onDelete(id: number): void {
    if (confirm('sure, master?')) {
      this.productoService.borrar(id).subscribe(data => {
        this.cargarProductos();
      });
    }
  }

}
