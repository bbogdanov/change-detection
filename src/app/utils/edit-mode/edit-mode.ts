import { SimpleChanges, OnChanges, ElementRef, Component } from '@angular/core';
import { NotificationCenterService } from 'src/app/notification-center.service';

@Component({
  selector: 'demo-edit-mode',
  template: ''
})
export class EditMode implements OnChanges {
  editMode = false;

  constructor(
    protected element: ElementRef<HTMLElement>,
    protected notificationCenter: NotificationCenterService
  ) {}

  triggerEditMode() {
    this.editMode = !this.editMode;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.element.nativeElement.classList.add('changesAreTriggered');
    this.notificationCenter.notify({message: 'Change detection!', action: this.constructor.name});

    setTimeout(() => {
      this.element.nativeElement.classList.remove('changesAreTriggered');
    }, 2000);
  }
}
