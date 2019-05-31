import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { DescriptionComponent } from './components/description/description.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  {path: '', redirectTo: '/description', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
  {path: 'list', component: ListComponent},
  {path: 'description', component: DescriptionComponent},
  {path: 'form/edit/:id', component: FormComponent},
  {path: 'info/:id', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  MainNavComponent, 
  FormComponent, 
  ListComponent, 
  DescriptionComponent,
  InfoComponent
];
