import { Observable } from "rxjs";
import { TokenService } from "./token.service";
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class InterceptorService {
    constructor(private tokenService: TokenService){}

    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let intReq = req;
        const token = this.tokenService.getToken();
        if (token != null){
            intReq =req.clone({headers: req.headers.set('Authorizaton','Bearer'+token)});
        }
        return next.handle(intReq);
    }
}

export const interceptorProvider =[{
    provide:    HTTP_INTERCEPTORS,
    userClass: InterceptorService,
    multi: true
}];