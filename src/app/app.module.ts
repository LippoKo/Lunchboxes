import { LunchboxesItemComponent } from './lunchboxes/lunchboxes-list/lunchboxes-item/lunchboxes-item.component';

import { LunchboxesListComponent } from './lunchboxes/lunchboxes-list/lunchboxes-list.component';
import { LunchboxesComponent } from './lunchboxes/lunchboxes.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodsComponent } from './foods/foods.component';
import { HeaderComponent } from './header/header.component';

import { LunchboxesDetailsComponent } from './lunchboxes/lunchboxes-details/lunchboxes-details.component';
import { FoodEditComponent } from './foods/food-edit/food-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodsComponent,
    LunchboxesComponent,
    LunchboxesListComponent,
    LunchboxesItemComponent,
    LunchboxesDetailsComponent,
    FoodEditComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
