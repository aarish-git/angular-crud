import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { TodosComponent } from './Component/todos/todos.component';
import { TodoItemComponent } from './Component/todo-item/todo-item.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'todo', component:TodosComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:TodoItemComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
