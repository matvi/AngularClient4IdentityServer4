import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  _user: any;
  loadedUserSub: any;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.loadedUserSub = this.authService.userLoadededEvent
      .subscribe(user => {
        this._user = user;
      });
      this.setTokenInLocalStorage();

  }

  setTokenInLocalStorage() {
    localStorage.setItem('access_token', this.authService.currentUser.access_token);
    localStorage.setItem('id_token', this.authService.currentUser.id_token);
  }
  clearState() {
    this.authService.clearState();
  }
  getUser() {
    this.authService.getUser();
  }
  removeUser() {
    this.authService.removeUser();
  }
  startSigninMainWindow() {
    this.authService.startSigninMainWindow();
  }
  endSigninMainWindow() {
    this.authService.endSigninMainWindow();
  }
  startSignoutMainWindow() {
    this.authService.startSignoutMainWindow();
  }
  endSignoutMainWindow() {
    this.authService.endSigninMainWindow();
  }
  ngOnDestroy() {
    if (this.loadedUserSub.unsubscribe()) {
      this.loadedUserSub.unsubscribe();
    }
  }
}
