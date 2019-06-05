import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'demo-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {

  character: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formBuilder.group({
      name: [''],
      height: [''],
      mass: [null],
      hair_color: [''],
      skin_color: [''],
      eye_color: [''],
      birth_year: [''],
      gender: [''],
      homeworld: [''],
      films: [[]],
      species: [[]],
      vehicles: [[]],
      starships: [[]],
      created: [''],
      edited: [''],
      url: [''],
    });
  }

}
