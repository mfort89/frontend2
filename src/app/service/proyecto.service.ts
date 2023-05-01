import { Injectable } from "@angular/core";
import { Proyecto } from "../model/proyecto.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
})

export class ProyectoService{
    authURL = 'http://localhost:8080';

    constructor(private httpClient: HttpClient){}

        public lista() : Observable<Proyecto[]> {
            return this.httpClient.get<Proyecto[]>(this.authURL+'lista');
}

         public detail(id: number): Observable<Proyecto>{
            return this.httpClient.get<Proyecto>(this.authURL + `detail/${id}`);
         }

         public save(proyecto: Proyecto): Observable<any>{
            return this.httpClient.post<any>(this.authURL + 'create', proyecto);
        }
    
        public update(id: number, proyecto: Proyecto): Observable<any>{
            return this.httpClient.put<any>(this.authURL + `update/${id}`, proyecto);
        }
    
        public delete(id: number): Observable<any>{
            return this.httpClient.delete<any>(this.authURL + `delete/${id}`);}
}