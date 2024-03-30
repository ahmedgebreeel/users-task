import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule],
  providers: [UsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

   users: any;

constructor(private usersService: UsersService) {
}
  ngOnInit(){
    this.usersService.getUsers(1).subscribe({
      next: (data) => {
        console.log(data.body.data);
        this.users = data.body.data
        console.log(this.users[1]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getUsers(arg0: number) {
    this.usersService.getUsers(arg0).subscribe({
      next: (data) => {
        console.log(data.body.data);
        this.users = data.body.data
        
      },
      error: (err) => {
        console.log(err);
      }
    })
    }


}
