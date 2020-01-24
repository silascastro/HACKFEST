
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ChatService {
    
    constructor(private httpClient: HttpClient){}

    getContats(id_do_usuario){
        return this.httpClient.get(`${environment.API_URL}:${environment.API_PORT}/contatos/${id_do_usuario}`).toPromise();
    }

    getConversation(id_do_emissor,id_do_receptor){
        const obj={
            'id_do_emissor':id_do_emissor,
            'id_do_receptor':id_do_receptor
        }
        return this.httpClient.get(`${environment.API_URL}:${environment.API_PORT}/conversa/${obj}`).toPromise();
    }

}
