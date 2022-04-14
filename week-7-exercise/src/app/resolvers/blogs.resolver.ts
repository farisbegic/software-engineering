import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {BlogModels} from "../models/blog.models";
import {Observable} from "rxjs";
import {BlogService} from "../services/BlogService";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BlogsResolver implements Resolve<BlogModels[]> {
  constructor(private blogService: BlogService) {
  }
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
  ): Observable<BlogModels[]> | Promise<BlogModels[]> | BlogModels[] {
    return this.blogService.getBlogs();
  }

}
