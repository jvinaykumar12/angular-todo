import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Wishlist } from '../shared/models/wishlist';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish-list/wish-list.component";
import { WishInputComponent } from "./wish-input/wish-input.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, WishInputComponent]
}) 
export class AppComponent {

  title = 'todo';
  items = [new Wishlist('complete angular'), new Wishlist('refresh frontend')]
  wish : string = ""
  listFilter : string = "0"

  get currentItems() : Wishlist[]{
    if(this.listFilter === '1') return this.items.filter(item => item.isComplete)
    else if(this.listFilter === '2') return this.items.filter(item => !item.isComplete)
    return this.items
  };

 

}

