import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/bienvenidos/services/chat/message.service';
@Component({
  selector: 'app-basic-chat',
  templateUrl: './basic-chat.component.html',
  styleUrls: ['./basic-chat.component.css']
})
export class BasicChatComponent implements OnInit {

  constructor(
    private MessageService: MessageService,                            
    ) { }

  ngOnInit() {
    
    this.subscribe_on_socket({macAddress:'sendMessage'});
  }


  subscribe_on_socket(selectedPC){
    const mac_address=String(selectedPC.macAddress);
    this.MessageService.getMessages(mac_address).subscribe((message: any) => {
      console.log('!!!!!!!!!!!!!',message)
    });
  }


  unsubscribe_on_socket(selectedPC){
    const mac_address=String(selectedPC.macAddress);
    this.MessageService.unsubscribe(mac_address);
  }

}
