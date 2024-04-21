import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutgoingMessage } from 'http';
import { EventService } from '../../shared/services/EventServices';


@Component({
  selector: 'wish-item',
  standalone: true,
  imports: [],
  templateUrl: './wish-item.component.html',
  styleUrl: './wish-item.component.css'
})
export class WishItemComponent {

  @Input() isFullfilled! : boolean;
  @Output() isFullfilledChange = new EventEmitter();
  @Input() wishText! : string

  constructor(private events: EventService) {}

  toggleItem() {
    this.isFullfilled = !this.isFullfilled
    this.isFullfilledChange.emit(this.isFullfilled)
  }

  removeWish() {
    this.events.emit('removeWish', this.wishText)
  }

}
