import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from 'src/app/modules/shared.module';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        SharedModule
    ],
    exports: [
        NavigationComponent
    ],
    declarations: [NavigationComponent]
})
export class NavigationModule {
}
