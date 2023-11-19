import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isuseradd: boolean=false
  clicckfun(){
     this.isuseradd=true;
    
    // this.menuListItems.push("login");
  }
// ngOnDestroy() {
//   console.log("navbar terekid");
// }
}
