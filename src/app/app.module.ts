import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DownloadPreviewComponent } from './form/download-preview/download-preview.component';
import { LoaderComponent } from './loader/loader.component';
import { DownloadPrivewDirective } from './directives/dynamic-component.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    DownloadPreviewComponent,
    LoaderComponent,
    DownloadPrivewDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
