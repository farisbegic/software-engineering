import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogModels} from "../../models/blog.models";
import {ResolverResponse} from "../../constants/resolver-response.constants";

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {
  public blogs: BlogModels[] = []

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      console.log(response[ResolverResponse.BLOGS])
      this.blogs = response[ResolverResponse.BLOGS];
    })
  }

}
