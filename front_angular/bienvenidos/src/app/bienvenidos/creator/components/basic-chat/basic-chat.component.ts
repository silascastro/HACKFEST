import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/bienvenidos/services/chat/chat.service';
@Component({
  selector: 'app-basic-chat',
  templateUrl: './basic-chat.component.html',
  styleUrls: ['./basic-chat.component.css']
})
export class BasicChatComponent implements OnInit {

  constructor(
    private chatService: ChatService,                            
    ) { }

  ngOnInit() {
    
    this.subscribe_on_socket({macAddress:'sendMessage'});
  }


  subscribe_on_socket(selectedPC){
    const mac_address=String(selectedPC.macAddress);
    this.chatService.getMessages(mac_address).subscribe((message: any) => {
      console.log('!!!!!!!!!!!!!',message)
    });
  }


  unsubscribe_on_socket(selectedPC){
    const mac_address=String(selectedPC.macAddress);
    this.chatService.unsubscribe(mac_address);
  }

}
