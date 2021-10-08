import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component'
import { ConvertToDash } from './shared/convert-to-dash.pipe';
import { DataTablesModule } from 'angular-datatables';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserslistComponent } from './userslist/userslist.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  { path: 'stock-list', component: StockListComponent },
  {path: 'user-registration',component:UserRegistrationComponent},
  {path:'userslist',component:UserslistComponent},
  {path:'user-registration/:id',component:UserRegistrationComponent},
  {path:'userdetails/:id',component:UserdetailsComponent},
  {path:'',component:UserslistComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    StockListComponent,
    ConvertToDash,
    UserRegistrationComponent,
    UserslistComponent,
    UserdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    DataTablesModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule
    
    

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
