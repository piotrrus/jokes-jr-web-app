import { Component, OnInit } from '@angular/core';
import { Joke } from '../../models/Joke.model';
import { JokesService } from 'src/app/services/joke.service';
import { ToastrService } from 'ngx-toastr';
import { StarRatingComponent } from 'ng-starrating';
import * as moment from 'moment';

@Component({
  selector: 'app-jokes-page',
  templateUrl: './jokes-page.component.html'
})

export class JokesPageComponent implements OnInit {
  jokeData: any = [];
  favouriteJokes: Joke[] = [];
  rate: number;
  jokeExist = false;
  error = false;

  constructor(
    private jokesService: JokesService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.getRandomJoke();
  }

  getRandomJoke() {
    this.rate = 5;
    /*this.jokesService.getRandomJoke().subscribe(data => {
      this.jokeData = data;
      this.jokeExist = this.checkIfExist(this.jokeData.id);
    },
      error => this.showErrorMessage()
    );*/
    this.jokesService.getRandomJoke().subscribe({
      next: (result: any) => {
        this.jokeData = result;
        this.jokeExist = this.checkIfExist(this.jokeData.id);
      },
      error: (err: any) => {
        console.log(err);
        this.showErrorMessage(err)
      },
    });
  }

  showErrorMessage(err) {
    this.error = true;
    this.toastr.error(err, 'Error');
  }

  showNewJokeMessage(joke: string) {
    this.toastr.success(joke, 'Added to Favourites');
  }

  onRate($event: {
    oldValue: number, newValue: number, starRating: StarRatingComponent
  }) {
    this.rate = $event.newValue;
  }

  addToFavourite() {
    const newJoke = new Joke();
    newJoke.id = this.jokeData.id;
    newJoke.date = moment(this.jokeData.created_at).format('YYYY-MM-DD');
    newJoke.url = this.jokeData.url.toUpperCase();
    newJoke.joke = this.jokeData.value.toUpperCase();
    newJoke.rating = this.rate;

    this.favouriteJokes.push(newJoke);
    this.jokeExist = true;
    this.showNewJokeMessage(this.jokeData.value);
  }

  checkIfExist(id: string): boolean {
    if (this.favouriteJokes.find(x => x.id === id)) {
      return true;
    }
    return false;
  }

}
