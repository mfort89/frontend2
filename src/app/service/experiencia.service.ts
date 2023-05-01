import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Experiencia } from "../model/experiencia.model";




@Injectable ({
    providedIn: 'root'
})

export class ExperienciaService{
    authURL = 'http://localhost:8080/auth/';

    constructor(private httpClient : HttpClient){}
   
    public lista(): Observable<Experiencia[]>{
        return this.httpClient.get<Experiencia[]>(this.authURL + 'lista');
    }

    public detail(id: number): Observable<Experiencia>{
        return this.httpClient.get<Experiencia>(this.authURL + `detail/${id}`);
    }

    public save(experiencia: Experiencia): Observable<any>{
        return this.httpClient.post<any>(this.authURL + 'create', experiencia);
    }

    public update(id: number, experiencia: Experiencia): Observable<any>{
        return this.httpClient.put<any>(this.authURL + `update/${id}`, experiencia);
    }

    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.authURL + `delete/${id}`);}
    
}