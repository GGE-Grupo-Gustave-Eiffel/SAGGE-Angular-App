import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent {

  segunda = [
    'Biologia',
    'Física',
    'Geografia',
    'Geografia',
    'Matemática',
    'Matemática'
  ];

  terca = [
    'Biologia1 Natural',
    'Física1 Animal',
    'Geografia1 de África',
    'Geografia1 de Áftica',
    'Matemática1 Aplicada',
    'Matemática1 Aplicada'
  ];

  quarta = [
    'Biologia1 Natural',
    'Física1 Animal',
    'Geografia1 de África',
    'Geografia1 de Áftica',
    'Matemática1 Aplicada',
    'Matemática1 Aplicada'
  ];

  quinta = [
    'Biologia1 Natural',
    'Física1 Animal',
    'Geografia1 de África',
    'Geografia1 de Áftica',
    'Matemática1 Aplicada',
    'Matemática1 Aplicada'
  ];

  sexta = [
    'Biologia1 Natural',
    'Física1 Animal',
    'Geografia1 de África',
    'Geografia1 de Áftica',
    'Matemática1 Aplicada',
    'Matemática1 Aplicada'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
