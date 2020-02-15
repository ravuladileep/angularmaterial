import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactfromComponent } from './reactfrom/reactfrom.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { MaterialpracticeComponent } from './materialpractice/materialpractice.component';


const routes: Routes = [
  {path: '', redirectTo : 'react', pathMatch: 'full'},
  {path: 'react', component: ReactfromComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserComponent},
  {path: 'material', component: MaterialpracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
