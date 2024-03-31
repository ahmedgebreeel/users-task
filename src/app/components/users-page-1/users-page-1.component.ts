import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users-page-1',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  providers: [UsersService],
  templateUrl: './users-page-1.component.html',
  styleUrl: './users-page-1.component.css',
})
export class UsersPage1Component implements OnInit{
  usersOfPage_1: any;

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit() {
    // checking if the array is empty or not and then get the users
    if (!this.usersOfPage_1) {
      this.usersService.getUsers(1).subscribe({
        next: (data) => {
          console.log(data.body.data);

          this.usersOfPage_1 = data.body.data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  clickedUser(id: any) {
    console.log(id);
    sessionStorage.setItem('id', id);
    this.router.navigateByUrl(`users/${id}`);
  }
}
