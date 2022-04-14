import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {BlogModels} from "../models/blog.models";
import {Observable} from "rxjs";
import {BlogService} from "../services/BlogService";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BlogResolver implements Resolve<BlogModels> {
  constructor(private blogService: BlogService) {
  }
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
  ): Observable<BlogModels> | Promise<BlogModels> | BlogModels {
    const id = route.paramMap.get(':id'.substring(1));
    return this.blogService.getBlog(id);
  }

}
