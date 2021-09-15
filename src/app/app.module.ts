import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PoliciesComponent } from './policies/policies.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatTableModule } from '@angular/material/table';

import { CentersComponent } from './centers/centers.component';
import { ArticlesComponent } from './articles/articles.component';
import { GraphQLModule } from './graphql.module';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { MarkdownModule } from 'ngx-markdown';
import { CategoryComponent } from './category/category.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    PoliciesComponent,
    NavBarComponent,
    ContactUsComponent,

    CentersComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    CategoryComponent,
  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    GraphQLModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
