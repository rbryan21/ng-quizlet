import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewFlashcardSetComponent } from './components/view-flashcard-set/view-flashcard-set.component';
import { HomeComponent } from './components/home/home.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashcardService } from './services/flashcard.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashcardFormComponent } from './components/flashcard-form/flashcard-form.component';
import { FlashsetComponent } from './components/flashcard-form/flashset/flashset.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'view-flashcard-set', component: ViewFlashcardSetComponent},
  {path: 'flashcard', component: FlashcardFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ViewFlashcardSetComponent,
    HomeComponent,
    FlashcardFormComponent,
    FlashsetComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ReactiveFormsModule,
    
  ],
  providers: [ ValidateService, 
               AuthService,
               FlashcardService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
