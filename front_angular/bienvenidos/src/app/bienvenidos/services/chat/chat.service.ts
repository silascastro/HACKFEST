
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ChatService {
    
    constructor(private httpClient: HttpClient){}

    getContacts(id_do_usuario,type){

            // mockup "fake data"
        if(type==='all'){
            return [
                {name:'Celina Passos',id_do_usuario:3},
                {name:'Sebastian Gimenez',id_do_usuario:2},
                {name:'Carlos Fernando',id_do_usuario:1}]
        
        }else{
            return [
                {name:'Sebastian Gimenez',id_do_usuario:2}]
        }    

        const obj={
            'id_do_usuario':id_do_usuario,
            'type':type
        }
             
        // return this.httpClient.get(`${environment.API_URL}:${environment.API_PORT}/contatos/${obj}`).toPromise();
    }

    getConversation(id_do_emissor,id_do_receptor){
        const obj={
            'id_do_emissor':id_do_emissor,
            'id_do_receptor':id_do_receptor
        }
                    // mockup "fake data"
        return [
        {message:'ola',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':5,'id_do_receptor':2},
        {message:'tudo bem ',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':2,'id_do_receptor':5},
        {message:'tudo sim, queria uma ajuda',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':5,'id_do_receptor':2},
        {message:'pode falar ',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':2,'id_do_receptor':5}
        ]
        

        // return this.httpClient.get(`${environment.API_URL}:${environment.API_PORT}/conversa/${obj}`).toPromise();
    }

}
