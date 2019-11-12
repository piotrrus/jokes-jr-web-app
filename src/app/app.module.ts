import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationModule } from './ui/navigation/navigation.module';
import { ApiService } from './services/api-service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared.module';
import { JokesPageModule } from './pages/jokes-page/jokes-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    HttpClientModule,
    SharedModule,
    JokesPageModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
