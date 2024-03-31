import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
    oneUser : any;
    constructor(private userDetailsService: UsersService){}

    ngOnInit(){
      const userId = sessionStorage.getItem('id');
      this.userDetailsService.getUserDetails(userId).subscribe({
        next: (data)=>{
          console.log(data.body.data);
          this.oneUser = data.body.data;
          
        },
        error(err){
          console.log(err);
          
        }
      })
    }
}
