import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupformComponent } from './popupform/popupform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImguploadComponent } from './zzz/imgupload/imgupload.component';
import { FileUploadComponent } from './zzz/imgupload/file-upload/file-upload.component';
import { ShowcardsComponent } from './showcards/showcards.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupformComponent,
    ImguploadComponent,
    FileUploadComponent,
    ShowcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
