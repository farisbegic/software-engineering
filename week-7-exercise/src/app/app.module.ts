import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './components/home/home.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {BlogsResolver} from "./resolvers/blogs.resolver";
import {BlogService} from "./services/BlogService";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {BlogResolver} from "./resolvers/blog.resolver";

@NgModule({
  declarations: [
    AppComponent,
    BlogPostsComponent,
    SinglePostComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [
    BlogsResolver,
    BlogResolver,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
