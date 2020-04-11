import { Component, OnInit, Input } from '@angular/core';
import { Shopping, ShoppingListServices } from '../shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() shoppingList: Shopping[] = [];

  constructor(private shoppingListServices: ShoppingListServices) { }

  ngOnInit(): void {
  }

  onRemoveItem(id: number) {
    const itemInd = this.shoppingList.findIndex(el => el.id === id);
    this.shoppingList.splice(itemInd, 1);
    this.shoppingListServices.removeShoppingItem(id);
  }

  onItemCountChange(id:number, newCount: number) {
    this.shoppingListServices.updateShoppingItemCount(id, newCount);
  }
  

}
