import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class ChatService {
    
    private socket;

    constructor() {
        this.socket = io(environment.API_URL+':'+environment.API_PORT, {
        // WARNING: in that case, there is no fallback to long-polling
        transports: [ 'websocket' ] // or [ 'websocket', 'polling' ], which is the same thing
        });
    }
        
    public getMessages(id_do_usuario){
        return Observable.create((observer) => {
            this.socket.on(id_do_usuario, (message) => {
              observer.next(message);
                
            });
        });
    }
    

    public getContatos(){
        return Observable.create((observer) => {
            this.socket.on('Contatos', (message) => {
                observer.next(message);
            });
        });
    }
    
    
    public getPessoaStatus(id_do_usuario){
        return Observable.create((observer) => {
            this.socket.on(id_do_usuario, (message) => {
              observer.next(message);
                
            });
        });
    }
    
    public getMenssagemStatus(id_do_usuario){
        return Observable.create((observer) => {
            this.socket.on(id_do_usuario, (message) => {
                observer.next(message);
            });
        });
    }
    
    public unsubscribe(id_do_usuario){
        this.socket.off(id_do_usuario);
        this.socket.removeAllListeners(id_do_usuario);
    }
}
