import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users-page-2',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  providers:[UsersService],
  templateUrl: './users-page-2.component.html',
  styleUrl: './users-page-2.component.css'
})
export class UsersPage2Component implements OnInit {

usersOfPage_2: any;
 
constructor(private router: Router, private usersService: UsersService) {}

ngOnInit() {
  // checking if the array is empty or not and then get the users
  if (!this.usersOfPage_2) {
    this.usersService.getUsers(2).subscribe({
      next: (data) => {
        console.log(data.body.data);

        this.usersOfPage_2 = data.body.data;
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
