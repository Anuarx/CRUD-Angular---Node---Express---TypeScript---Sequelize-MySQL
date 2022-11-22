import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
  },
  {
    path: 'add',
    component: AddEditProductComponent,
  },
  {
    path: 'edit/:id',
    component: AddEditProductComponent,
  },
  // path '**' siempre ultimo ya que angular lee todo sequencial
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
