import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'releases',
        loadChildren: () => import("./releases/releases.module").then(m => m.ReleasesModule),
    },
    {
        path: 'categories',
        loadChildren: () => import("./categories/categories.module").then(m => m.CategoriesModule),
    },
    {
        path: 'reports',
        loadChildren: () => import("./reports/reports.module").then(m => m.ReportsModule),
    },
    {
        path: 'cards',
        loadChildren: () => import("./cards/cards.module").then(m => m.CardsModule),
    },
    {
        path: 'accounts',
        loadChildren: () => import("./accounts/accounts.module").then(m => m.AccountsModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
