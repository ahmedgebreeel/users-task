import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersPage1Component } from './components/users-page-1/users-page-1.component';
import { UsersPage2Component } from './components/users-page-2/users-page-2.component';

export const routes: Routes = [
    {path: '', redirectTo: 'users/page1', pathMatch: 'full'},
    {path: 'users', redirectTo: 'users/page1', pathMatch: 'full' },
    {path: 'users/page1', component: UsersPage1Component},
    {path: 'users/page2', component: UsersPage2Component},
    {path: 'users/:id', component: UserDetailsComponent },
]
