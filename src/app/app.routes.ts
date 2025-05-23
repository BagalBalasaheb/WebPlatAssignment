import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LayoutComponent } from './Layouts/layout/layout.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { UsersComponent } from './Components/users/users.component';
import { ProductsComponent } from './Components/products/products.component';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' }, 
    {
        path: 'dashboard', 
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            { 
                path: 'profile', 
                loadComponent: () => import('./Components/profile/profile.component').then(m => m.ProfileComponent) 
            },
            { 
                path: 'users', 
                loadComponent: () => import('./Components/users/users.component').then(m => m.UsersComponent) 
            },
            { 
                path: 'products', 
                loadComponent: () => import('./Components/products/products.component').then(m => m.ProductsComponent) 
            },
        ],
    },
    { path: '**', redirectTo: '' }  
];


// [
//     { path: '', component: LoginComponent, pathMatch: 'full' }, 
//     {
//         path: 'dashboard', 
//         component: LayoutComponent,
//         children: [
//             { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
//             { path: 'users', component: UsersComponent, canActivate: [authGuard]},
//             { path: 'products', component: ProductsComponent, canActivate: [authGuard]},
//         ],
//     },
//     { path: '**', redirectTo: '' } 
// ];