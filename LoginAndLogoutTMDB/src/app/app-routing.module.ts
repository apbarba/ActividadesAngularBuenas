import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { PeopleListComponent } from './components/people-list/people-list.component';

const routes: Routes = [
  {path : 'login', component: AccountComponent},
  {path: '', component: PeopleListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
