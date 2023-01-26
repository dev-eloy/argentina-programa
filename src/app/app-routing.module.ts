import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducationComponent } from './components/education/editeducation.component';
import { NeweducationComponent } from './components/education/neweducation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditworkComponent } from './components/work/editwork.component';
import { NewWorkComponent } from './components/work/new-work.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-work', component: NewWorkComponent },
  { path: 'editwork/:id', component: EditworkComponent},
  { path: 'new-edu', component: NeweducationComponent },
  { path: 'edit-edu/:id', component: EditeducationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
