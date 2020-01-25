import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/bienvenidos/services/chat/message.service';
import { ChatService } from 'src/app/bienvenidos/services/chat/chat.service';
import { Type } from '@angular/compiler';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-basic-chat',
  templateUrl: './basic-chat.component.html',
  styleUrls: ['./basic-chat.component.css']
})
export class BasicChatComponent implements OnInit {
  contacts=[];
  current_conversation=[];
  current_receptor;
  id_user=5;
  angForm: FormGroup;
  type_of_chat='recents';

  constructor(
    private messageService: MessageService,
    private chatService: ChatService,
    private fb: FormBuilder){    
      this.createForm();
}

  ngOnInit() {
    
    this.subscribe_on_socket('sendMessage');
    this.findContacts('recents')

  }
  
  createForm() {
    this.angForm = this.fb.group({
      text_message: ['',
          [
            Validators.required,
            Validators.minLength(3)

          ],
      ]
    });
  }
  send_message(){
    if(this.current_receptor){
      let m=this.angForm.get('text_message').value;
      // TODO ta enviando msn vazia tratar isso
      // if(m.length()>1){

        console.log("######@@@",m)
        this.send(m);

        let a = {message:m,timestamp:'Wed 01-01-2009 6:00','id_do_emissor':this.id_user,'id_do_receptor':this.current_receptor.id_user};
        this.current_conversation.push(a)

        this.angForm.reset();
      // }
    }
  }
  send(message){

    this.messageService.sendMessages(this.id_user,this.current_receptor.id_user,message);
  }

  findContacts(type_of_contacts){
    this.type_of_chat=type_of_contacts;
    this.contacts=this.chatService.getContacts(1,type_of_contacts);
  }

  findConversation(contact){
    this.current_receptor=contact;


    this.current_conversation=this.chatService.getConversation(contact.id,this.id_user);
    console.log('!!!!!!!!!!!!!',this.current_conversation)

  }
  subscribe_on_socket(topic){
    this.messageService.getMessages(topic).subscribe((message: any) => {
      console.log('!!!!!!!!!!!!!',message)
    });
  }


  unsubscribe_on_socket(topic){
    this.messageService.unsubscribe(topic);
  }

}
