import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Wishlist } from '../../shared/models/wishlist';

@Component({
  selector: 'wish-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-input.component.html',
  styleUrl: './wish-input.component.css'
})
export class WishInputComponent {
  wish : string = ""
  @Output() addWish = new EventEmitter<Wishlist>();
  addNewWish(){
    this.addWish.emit(new Wishlist(this.wish))
    this.wish = ''
  }
}
