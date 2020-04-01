import { Component, OnInit } from '@angular/core';
import { LikeServices } from '../../likes.services';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.css']
})
export class LikeListComponent implements OnInit {

  public likes = [];

  constructor(private likesServices: LikeServices) { }

  ngOnInit(): void {
    this.likes = this.likesServices.getLikes();
  }



}
