import { Component, Input } from '@angular/core';
import { Character } from './character.contract';
import { EditMode } from 'src/app/utils/edit-mode/edit-mode';

@Component({
  selector: 'demo-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent extends EditMode {
  @Input()
  character: Character;

  description = '';

  changeDescription(description: string) {
    this.description = description;
    this.triggerEditMode();
  }
}
