import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogPostsComponent} from "./components/blog-posts/blog-posts.component";
import {HomeComponent} from "./components/home/home.component";
import {ResolverResponse} from "./constants/resolver-response.constants";
import {BlogsResolver} from "./resolvers/blogs.resolver";
import {SinglePostComponent} from "./components/single-post/single-post.component";
import {BlogResolver} from "./resolvers/blog.resolver";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "blogs",
    component: BlogPostsComponent,
    resolve: {
      [ResolverResponse.BLOGS]: BlogsResolver
    }
  },
  {
    path: "blogs/:id",
    component: SinglePostComponent,
    resolve: {
      [ResolverResponse.BLOG]: BlogResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
