
 

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    
    constructor(private httpClient: HttpClient){}

    getUser(){

            // mockup "fake data"
            return [
                {name:'tag3',id_user:3,value:false},
                {name:'tag2',id_user:2,value:false},
                {name:'tag1',id_user:1,value:false}]
        

              
        // return this.httpClient.get(`${environment.API_URL}:${environment.API_PORT}/tags/`).toPromise();
    }

}
