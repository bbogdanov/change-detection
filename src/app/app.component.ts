import { Component, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditMode } from './utils/edit-mode/edit-mode';
import { NotificationCenterService } from './notification-center.service';
import { Character } from './star-wars/character/character.contract';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends EditMode implements OnChanges {
  characters: Character[];

  private getCharacters = this.http.get('https://swapi.co/api/people');

  private allCharacters: Character[];

  constructor(
    private http: HttpClient,
    notificationCenter: NotificationCenterService,
    element: ElementRef
  ) {
    super(element, notificationCenter);

    this.getCharacters.subscribe((data: any) => {
      console.log(data);
      this.characters = data.results;
      this.allCharacters = data.results;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    this.notificationCenter.notify({
      message: 'Changes',
      action: 'Application root'
    });
  }

  searchFor(text: string) {
    if (text) {
      this.characters = this.allCharacters.filter(character => {
        return character.name.indexOf(text) > -1;
      });
    } else {
      this.characters = this.allCharacters;
    }
  }
}
