import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) { }
  public url = 'http://dummy.restapiexample.com/api/v1/employees';

  getusers(): Observable <any[]> {
    return this.http.get<any[]>(this.url)
    .pipe(retry(1), catchError(this.handleError));
  }
  getuser(id: number): Observable <any> {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees/' + id)
    .pipe(map((res: Response) => {
      return res || {};
    }), catchError(this.handleError));
  }

  postuser(userdata): Observable <any[]> {
    return this.http.post<any[]>('http://localhost:3000/users', userdata);
  }


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
