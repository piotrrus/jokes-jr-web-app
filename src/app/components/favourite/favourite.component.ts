import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Joke } from '../../models/Joke.model';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})

export class FavouriteComponent implements OnInit, OnChanges {

  @Input() favouriteJokes: Joke[];

  constructor(
  ) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    const favouriteJokes = changes.favouriteJokes;
    if (favouriteJokes.currentValue) {
    }
  }

}
