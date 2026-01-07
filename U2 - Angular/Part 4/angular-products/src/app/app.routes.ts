import { Routes } from '@angular/router';
import { ProductsPage } from './products/products-page/products-page';
import { ProductForm } from './products/product-form/product-form';
import { ProductDetail } from './products/product-detail/product-detail';
import { numericIdGuard } from './guards/numeric-id-guard';
import { leavePageGuard } from './guards/leave-page-guard';
import { Welcome } from './welcome/welcome';

export const routes: Routes = [
  { path: 'welcome', component: Welcome, title: 'Welcome | Angular Products' },
  { path: 'products', component: ProductsPage, title: 'Productos | Angular Products' },
  {
    path: 'products/add',
    component: ProductForm,
    title: 'Añadir producto | Angular Products',
    canDeactivate: [leavePageGuard],
  },
  {
    path: 'products/:id',
    component: ProductDetail,
    title: 'Detalle producto | Angular Products',
    canActivate: [numericIdGuard],
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  // Aquí podríamos cargar un página de error 404 por ejemplo
  { path: '**', redirectTo: '/welcome' },
];
