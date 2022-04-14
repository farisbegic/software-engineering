import { Component, OnInit } from '@angular/core';
import {BlogModels} from "../../models/blog.models";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../../constants/resolver-response.constants";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  public blog: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      console.log(response[ResolverResponse.BLOG]);
      this.blog = response[ResolverResponse.BLOG];
    })
  }

}
