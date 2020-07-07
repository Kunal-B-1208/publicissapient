import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private spinner: NgxSpinnerService){

    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        this.spinner.show();
        return next.handle(req)
            .pipe (tap (
        //            event => console.log(event),
                    error => console.log( error )
                ), finalize(() => {
                    this.spinner.hide();  
                })
            );

    }
    
}