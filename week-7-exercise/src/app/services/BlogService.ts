import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BlogModels} from "../models/blog.models";

@Injectable()
export class BlogService {
  private url = "https://jsonplaceholder.typicode.com/posts/";

  constructor(private http: HttpClient) {
  }

  public getBlogs(): Observable<BlogModels[]> {
    return this.http.get<BlogModels[]>(this.url);
  }
  public getBlog(id: string | null): Observable<BlogModels> {
    return this.http.get<BlogModels>(this.url + id);
  }
}
