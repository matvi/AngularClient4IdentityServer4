import { AuthService } from './_services/auth.service';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {MatSidenav} from '@angular/material/sidenav';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public screenWidth: number;

  constructor(private router: Router, private authService: AuthService) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  limpiar() {
    localStorage.removeItem('currentUser');

    this.router.navigate(['login']);
  }
  logOut() {
    this.authService.startSignoutMainWindow();
  }
}
