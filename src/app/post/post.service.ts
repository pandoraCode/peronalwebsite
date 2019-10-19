import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBlog} from '../models/blog';
import {CategoryService} from '../category/category.service';


const API_URL = 'http://127.0.0.1:8001/api/posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private categoryService: CategoryService) {
  }

  getPosts(): Observable<IBlog[]> {
      return this.http.get<IBlog[]>(API_URL);
  }

  getCategories() {
    return this.categoryService.getCategories();
  }
}
