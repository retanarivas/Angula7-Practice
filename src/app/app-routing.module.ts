import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {path: '*', component: MainNavComponent},
  {path: 'form', component: FormComponent},
  {path: 'list', component: ListComponent},
  {path: 'description', component: DescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainNavComponent, FormComponent, ListComponent, DescriptionComponent];
