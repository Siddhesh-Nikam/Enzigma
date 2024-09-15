import { Routes } from '@angular/router';
import { ReadComponent } from './Components/read/read.component';
import { CreateComponent } from './Components/create/create.component';

export const routes: Routes = [

    {
        path:'',
        component:ReadComponent
    },

    {
        path:'tasks',
        component:ReadComponent
    },

    {
        path:'tasks/add',
        component:CreateComponent
    },

    {
        path:'tasks/:id',
        component:CreateComponent
    }


    

];
