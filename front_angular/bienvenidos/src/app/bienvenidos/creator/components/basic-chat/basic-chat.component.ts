import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/bienvenidos/services/chat/message.service';
import { ChatService } from 'src/app/bienvenidos/services/chat/chat.service';
import { Type } from '@angular/compiler';
@Component({
  selector: 'app-basic-chat',
  templateUrl: './basic-chat.component.html',
  styleUrls: ['./basic-chat.component.css']
})
export class BasicChatComponent implements OnInit {
  contacts=[];
  current_conversation;
  id_do_usuario=8;

  constructor(
    private messageService: MessageService,
    private chatService: ChatService
                           
    ) { }
  

  ngOnInit() {
    
    this.subscribe_on_socket({macAddress:'sendMessage'});
    this.findContacts('recents')

  }
  
  findContacts(type_of_contacts){
    console.log('@@@@@@@@@',type_of_contacts)
    this.contacts=this.chatService.getContacts(1,type_of_contacts);
    console.log('!!!!!!!!!!!!!',this.current_conversation)
  }

  findConversation(contact){

    this.current_conversation=this.chatService.getConversation(contact.id,this.id_do_usuario);
    console.log('!!!!!!!!!!!!!',this.current_conversation)

  }
  subscribe_on_socket(selectedPC){
    const mac_address=String(selectedPC.macAddress);
    this.messageService.getMessages(mac_address).subscribe((message: any) => {
      console.log('!!!!!!!!!!!!!',message)
    });
  }


  unsubscribe_on_socket(selectedPC){
    const mac_address=String(selectedPC.macAddress);
    this.messageService.unsubscribe(mac_address);
  }

}
