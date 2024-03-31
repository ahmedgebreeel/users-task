import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  providers: [UsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent  {
  
}
 


   
