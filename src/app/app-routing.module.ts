import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsDetailComponent } from './components/components-detail/components-detail.component';
import { ComponentsListComponent } from './components/components-list/components-list.component';

const routes: Routes = [
  { path: '', component: ComponentsListComponent },
  { path: 'detail/random', component: ComponentsDetailComponent },
  { path: '**', component: ComponentsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}