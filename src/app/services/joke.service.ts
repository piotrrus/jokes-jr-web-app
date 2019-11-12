import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Observable } from 'rxjs';
import { Joke } from '../models/Joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  constructor(private apiService: ApiService) { }

  public getRandomJoke(): Observable<Joke> {
    return this.apiService.get(`jokes/random`);
  }
}
