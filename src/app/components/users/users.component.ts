import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule],
  providers: [UsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

   usersOfPage_1: any;
   usersOfPage_2: any;

constructor(private usersService: UsersService, private router: Router) {
}
  ngOnInit(){
    this.getUsers(1);
  }

  getUsers(arg0: number) {
    // checking if the array is empty or not and then get the users
    if(!this.usersOfPage_2){

      this.usersService.getUsers(arg0).subscribe({
        next: (data) => {
          console.log(data.body.data);
          if(arg0 === 1){
            this.usersOfPage_1 = data.body.data;
          }else{
            this.usersOfPage_2 = data.body.data;
          }
          
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
    }


    clickedUser(id:any){
      console.log(id);
      sessionStorage.setItem('id', id);
      this.router.navigateByUrl(`users/${id}`);
      
    }
}
