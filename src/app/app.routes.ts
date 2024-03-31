import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'users', component: UsersComponent},
    {path: 'users/:id', component: UserDetailsComponent }
]
