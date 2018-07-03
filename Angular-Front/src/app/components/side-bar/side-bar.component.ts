import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  user:any;

  constructor(
    private router:Router,
    private authService:AuthService,
  ) {}

  ngOnInit() {
    this.user = this.authService.getName();
  }

}
