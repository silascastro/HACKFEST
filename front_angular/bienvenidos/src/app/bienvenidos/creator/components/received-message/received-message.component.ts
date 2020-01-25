import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-received-message',
  templateUrl: './received-message.component.html',
  styleUrls: ['./received-message.component.css']
})
export class ReceivedMessageComponent implements OnInit {

  constructor() { }
  @Input() message: string;
  ngOnInit() {
  }

}
