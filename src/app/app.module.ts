import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { DescriptionComponent } from './components/description/description.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantsService } from './services/plants.service'


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    routingComponents,
    ToolBarComponent,
    FormComponent,
    ListComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    PlantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
