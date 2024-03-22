import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import {MatError, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './services/base.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { SolutionsComponent } from './components/solutions/solutions.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CreateUserComponent,
    HomeComponent,
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatError,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
