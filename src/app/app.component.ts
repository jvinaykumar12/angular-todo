import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Wishlist } from '../shared/models/wishlist';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish-list/wish-list.component";
import { WishInputComponent } from "./wish-input/wish-input.component";
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import {EventService} from '../shared/services/EventServices';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, WishInputComponent, WishFilterComponent],
    providers : [EventService]
}) 
export class AppComponent {

  title = 'todo';
  items = [new Wishlist('complete angular'), new Wishlist('refresh frontend')]
  wish : string = ""
  listFilter : any;
  constructor(events: EventService) {
    events.listen('removeWish',(wish : any)=>{
      console.log(wish)
      this.items = this.items.filter(item =>{
        console.log(item.wishText, wish)
        return item.wishText != wish
      })
    })
  }

  get currentItems() : Wishlist[]{
    if(this.listFilter === '1') return this.items.filter(item => item.isFullfilled)
    else if(this.listFilter === '2') return this.items.filter(item => !item.isFullfilled)
    return this.items
  };
}

