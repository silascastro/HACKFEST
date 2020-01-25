import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sent-message',
  templateUrl: './sent-message.component.html',
  styleUrls: ['./sent-message.component.css']
})
export class SentMessageComponent implements OnInit {

  constructor() { }
  @Input() message: string;
  
  ngOnInit() {
  }

}
