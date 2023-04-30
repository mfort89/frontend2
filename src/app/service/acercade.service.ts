import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";




@Injectable({
    providedIn: 'root'
})

export class AcercadeService{
   authURL = 'http://localhost:8080/auth/';

   constructor(private httpClient: HttpClient) {}
}