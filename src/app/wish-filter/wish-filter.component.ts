import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{
  ngOnInit(): void {
    this.listFilter = "0"
  }
    @Input() listFilter : any;
    @Output() listFilterChange = new EventEmitter<string>();
  emitFilterChangeEvent(event : string) {
      console.log(event)
      this.listFilter = event
      this.listFilterChange.emit(this.listFilter)
    }

}
