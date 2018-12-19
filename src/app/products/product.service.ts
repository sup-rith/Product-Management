/* This is a service.
 To create a service: 
    1) Service class 
        - clear name 
        - @Injectable() decorator 
        - define imports 
 To register a service: 
    1) Select apporiate level in the hierarchy Root injector vs. component injector
        - Use root application injector to use service throughout our application.
        - Use component injector if service is only used my one component. 
    2) Use the providedIn property to 'root' 
    
*/

import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; //Used for sending HTTP request
import { Observable, throwError } from 'rxjs'; //Used for http request
import { catchError, tap, map } from 'rxjs/operators'; //Error Handling for http request

@Injectable({
    providedIn: 'root'
})

export class ProductService{

    //URL for where the data is coming from
    private productUrl = 'api/products/products.json';

    //http variable to use GET request called HttpClient
    constructor(private http: HttpClient) {}
        
    
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
      }

    //Handling Errors 
    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }

}