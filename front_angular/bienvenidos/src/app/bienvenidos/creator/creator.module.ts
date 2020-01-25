import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorRoutingModule } from './creator-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule,
         MatInputModule,
         MatTableModule,
         MatCheckboxModule,
         MatIconModule,
         MatPaginatorModule,
         MatButtonModule, 
         MatSelectModule,
         MatCommonModule,
         MatDialogModule,
         MatFormFieldModule,MatDividerModule, MatSnackBarModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BasicChatComponent } from './components/basic-chat/basic-chat.component';
import { ReceivedMessageComponent } from './components/received-message/received-message.component';
import { SentMessageComponent } from './components/sent-message/sent-message.component';
import { ViewRequestsComponent } from './components/view-requests/view-requests.component';

@NgModule({
  declarations: [  HomeComponent, BasicChatComponent, ReceivedMessageComponent, SentMessageComponent, ViewRequestsComponent],
  imports: [
    CommonModule,
    CreatorRoutingModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    DragDropModule,
    MatSnackBarModule,
        
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ],


})

export class CreatorModule { }
