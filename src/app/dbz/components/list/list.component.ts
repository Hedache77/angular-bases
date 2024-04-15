import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  styleUrl: './list.component.css',
  templateUrl: './list.component.html'
})

export class ListComponent {

  @Input()
  public charactersList: Character[] = [
    {
      name: 'Trunks',
      power: 2
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if( !id ) return;
    this.onDelete.emit(id);
  }

}
