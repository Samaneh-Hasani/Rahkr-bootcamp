import { Routes } from '@angular/router';
import { SabteaxComponent } from './sabteax/sabteax.component';
import { ShowComponent } from './show/show.component';

export const routes: Routes = [
    
    {
        path: "",
        component: SabteaxComponent
      },
      {
        path: "sabt",
        component: SabteaxComponent
      },
      {
        path: "show",
        component: ShowComponent
      },

];
