import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material'

import { PersonListComponent }  from './components/person-list.component';
import { PersonService } from './services/person.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, MaterialModule],
  declarations: [ PersonListComponent ],
  providers:    [ PersonService ],
  bootstrap:    [ PersonListComponent ]
})
export class AppModule { }
