import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Educacion } from "../model/educacion.model";







@Injectable({
    providedIn: 'root'
})

export class EducacionService{
    authURL = 'http://localhost:8080/auth/';

    constructor(private httpClient: HttpClient){}
    
    public lista(): Observable<Educacion[]>{
        return this.httpClient.get<Educacion[]>(this.authURL + 'lista');
    }

    public detail(id: number): Observable<Educacion>{
        return this.httpClient.get<Educacion>(this.authURL + `detail/${id}`);
    }

    public save(educacion: Educacion): Observable<any>{
        return this.httpClient.post<any>(this.authURL + 'create', educacion);
    }

    public update(id: number, educacion: Educacion): Observable<any>{
        return this.httpClient.put<any>(this.authURL + `update/${id}`, educacion);
    }

    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.authURL + `delete/${id}`);}
}