import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared.module';
import { JokesPageComponent } from './jokes-page.component';
import { FavouriteComponent } from 'src/app/components/favourite/favourite.component';
import { JokesService } from 'src/app/services/joke.service';

@NgModule({
  declarations: [JokesPageComponent, FavouriteComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [JokesPageComponent, FavouriteComponent],
  providers: [JokesService]
})
export class JokesPageModule { }
