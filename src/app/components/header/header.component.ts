import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(public userService: UserService, private router:Router) {}
  ngOnInit(): void {

    if (typeof window !== 'undefined') {
      console.log('Currently on Client side')
      let str = localStorage.getItem('user');
      if(str != null) {
        this.userService.user = JSON.parse(str);
      }
      else {
        this.router.navigateByUrl("/login")
      }
  } else {
      console.log('Currently on Server Side');
  }

   
  }
   
  logout() {
    this.userService.user = undefined;
    this.router.navigateByUrl("/login")

  }
}
