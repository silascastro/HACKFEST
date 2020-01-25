
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ChatService {
    
    constructor(private httpClient: HttpClient){}

    getContacts(id_user,type){

            // mockup "fake data"
        if(type==='all'){
            return [
                {name:'Celina Passos',id_user:3},
                {name:'Sebastian Gimenez',id_user:2},
                {name:'Carlos Fernando',id_user:1}]
        
        }else{
            return [
                {name:'Sebastian Gimenez',id_user:2}]
        }    

        const obj={
            'id_user':id_user,
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
        {message:'ola',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':5,'id_do_receptor':2,tags:[]},
        {message:'tudo bem ',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':2,'id_do_receptor':5,tags:[]},
        {message:'tudo sim, queria uma ajuda',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':5,'id_do_receptor':2,tags:[]},
        {message:'pode falar ',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':2,'id_do_receptor':5,tags:[]},
        {message:'estou com um problema pra arrumar emprego',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':2,'id_do_receptor':5,tags:[]},
        {message:'procuro muito',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':2,'id_do_receptor':5,tags:[]},
        {message:'test',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':2,'id_do_receptor':5,tags:[]},
        {message:'test',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':2,'id_do_receptor':5,tags:[]},
        {message:'test',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':2,'id_do_receptor':5,tags:[]},
        {message:'test',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':2,'id_do_receptor':5,tags:[]},
        {message:'test',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':2,'id_do_receptor':5,tags:[]},
        {message:'test',timestamp:'Wed 01-01-2009 6:00','id_do_emissor':2,'id_do_receptor':5,tags:[]},
    ]
        

        // return this.httpClient.get(`${environment.API_URL}:${environment.API_PORT}/conversa/${obj}`).toPromise();
    }

}
