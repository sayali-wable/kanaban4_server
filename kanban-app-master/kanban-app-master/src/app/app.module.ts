import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { TodoComponent } from './body/todo/todo.component';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InprogessComponent } from './body/inprogess/inprogess.component';
import { CompletedComponent } from './body/completed/completed.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    TodoComponent,
    InprogessComponent,
    CompletedComponent,
    ModalComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgModel,

    AppRoutingModule,
    MatIconModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
