import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Wishlist } from '../../shared/models/wishlist';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() currentItems: Wishlist[] = []

  toggleItem(e:Wishlist){
    e.isComplete = !e.isComplete
  }
  
}
