import { SimpleChanges, ElementRef, OnChanges } from '@angular/core';

export class ChangeDetectionPresenter implements OnChanges {

  constructor(private element: ElementRef<HTMLElement>) {}

  ngOnChanges(changes: SimpleChanges) {
    this.element.nativeElement.classList.add('changesAreTriggered');

    setTimeout(() => {
      this.element.nativeElement.classList.remove('changesAreTriggered');
    }, 2000);
  }
}
