import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ICategory} from '../models/category';
import {catchError, map} from 'rxjs/operators';

const API_URL = 'http://127.0.0.1:8001/api/categories';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<ICategory[]> {
      return this.http.get<ICategory[]>(API_URL);
  }

  getCategory(id: number): Observable<ICategory> {
    /*return this.getCategories().pipe(
      // (+) before `id` turns the string into a number
      map((categories: ICategory[]) => categories.find(category => category.id === +id))
    );*/
    return this.http.get<ICategory>(API_URL + '/' + id);
  }

  editCategory(id: number, category: ICategory) {
    return this.http.post(API_URL + '/edit/' + id, category)
      .pipe(catchError(this.errorHandler));
  }

  addCategory(category) {
    return this.http.post(API_URL + '/new', category)
      .pipe(catchError(this.errorHandler));
  }

  deleteCategory(id: number) {
    return this.http.delete(API_URL + '/delete/' + id)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
