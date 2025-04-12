import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>User List</h1>
    <app-user-table></app-user-table>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-pagination-app';
}