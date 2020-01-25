import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/bienvenidos/services/tag/tag.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/bienvenidos/services/chat/message.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  available_tags=[];
  angForm: FormGroup;
  ALL_USERS=0  
  id_user=5;
  user={
    id_user:5,
    name:'João da Silva',
    tipo:'Voluntário',
    idade:32
  }

  constructor(
    private tagService: TagService,
    private messageService: MessageService,
    private fb: FormBuilder){    
      this.createForm();
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

      let m=this.angForm.get('text_message').value;

        console.log("######@@@",m)
        this.send(m);

        let a = {message:m,timestamp:'Wed 01-01-2009 6:00','id_do_emissor':this.id_user,'id_do_receptor':this.ALL_USERS};

        this.angForm.reset();
  }
  send(message){
     
  let tags = this.available_tags.filter(function(ele) {
      return true === ele.value;
  });
  console.log('%$$$',tags)

    this.messageService.sendMessages(this.id_user,this.ALL_USERS,message,tags);
  }

  changeCheckbox(state, tag) {
    const checkbox = this.available_tags.find(x => x.name === tag.name);
    checkbox.value = state;
    

  }

  ngOnInit() {
    this.available_tags=this.tagService.getAvailableTags();
  }

}
