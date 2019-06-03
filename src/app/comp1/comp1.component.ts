import { Component, Input, SimpleChanges, OnChanges, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'demo-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnChanges {

  @Input()
  text: string;

  changed = new Subject();

  constructor(private element: ElementRef<HTMLDivElement>) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.text.firstChange) {
      this.changed.next(true);
      console.log('Changes in', this.constructor.name);

      setTimeout(() => {
        this.element.nativeElement.style.backgroundColor = 'none';
        this.changed.next(false);
      }, 1000);
    }
  }

}
