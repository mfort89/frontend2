import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../model/nuevo-usuario.model';
import { JwtDto } from '../model/jwt-dto.model';
import { LoginUsuario } from '../model/login-usuario.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    authURL = 'http://localhost:8080/auth/';

    constructor(private httpClient: HttpClient){}

    public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>
    {
        return this.httpClient.post<any>(this.authURL +'nuevo', nuevoUsuario);
    }

    public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
        return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
    
}}