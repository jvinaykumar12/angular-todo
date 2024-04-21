import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Wishlist } from '../../shared/models/wishlist';
import { WishItemComponent } from '../wish-item/wish-item.component';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule, WishItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() currentItems: Wishlist[] = []

  toggleItem(e:Wishlist){
    e.isFullfilled = !e.isFullfilled
  }
  
}
