import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.html',
  styleUrls: ['./biblioteca.css']
})
export class BibliotecaComponent {
  @HostBinding('class.text-center') centrado = true;

  titulo = 'Mi Biblioteca Creativa';
  libros = ['Angular Básico', 'Bootstrap Avanzado', 'TypeScript Moderno'];

  agregarLibro(libro: string) {
    if (libro.trim()) {
      this.libros.push(libro);
    }
  }
}
