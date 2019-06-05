import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';
import { FilmComponent } from './film/film.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CharacterComponent, FilmComponent],
  exports: [CharacterComponent, FilmComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule]
})
export class StarWarsModule {}
