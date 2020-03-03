import { ItemService } from './../../services/item.service';
import { Item } from './../../models/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(event, item) {
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(event, item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
