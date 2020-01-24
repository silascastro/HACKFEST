import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCommonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { MatIconModule } from "@angular/material/icon";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
    

  ],
  exports: [
     BrowserModule,AppRoutingModule, BrowserAnimationsModule, HttpClientModule,    

     FormsModule, ReactiveFormsModule 
    ],
    providers: [
      { provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] }
     ],
    bootstrap: [AppComponent],
})
export class AppModule { }
