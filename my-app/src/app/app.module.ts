import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateArticleComponent } from './create-article/create-article.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SelectSectionComponent } from './shared/select-section/select-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { OverviewComponent } from './overview/overview.component';
import { BlogComponent } from './blog/blog.component';
import { NewBlogComponent } from './new-blog/new-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    CreateArticleComponent,
    SelectSectionComponent,
    OverviewComponent,
    BlogComponent,
    NewBlogComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    NgSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
