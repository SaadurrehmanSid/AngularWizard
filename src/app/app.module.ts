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

const routes: Routes = [
  { path: 'stock-list', component: StockListComponent }
 
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    StockListComponent,
    ConvertToDash
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
    RouterModule.forRoot(routes)
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
