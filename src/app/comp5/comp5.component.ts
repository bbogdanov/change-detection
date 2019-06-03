import { Component, OnChanges, Input, SimpleChanges, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'demo-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.scss']
})
export class Comp5Component extends Comp1Component {
}
