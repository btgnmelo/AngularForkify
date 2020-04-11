import { Component, OnInit, Input } from '@angular/core';
import { LikeServices } from '../../likes.services';
import { RecipeSearch } from '../../recipe.model'

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.css']
})
export class LikeListComponent implements OnInit {

  @Input() likes: RecipeSearch[];

  constructor() { }

  ngOnInit(): void {
    
  }



}
