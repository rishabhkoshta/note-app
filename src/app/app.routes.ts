import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NoteService } from './note.service';
import { NoteEditComponent } from './note-edit/note-edit.component';

export const routes: Routes = [
    { path: '', redirectTo: '/notes', pathMatch: 'full' },
    { path: 'notes', component: NoteListComponent },
    {path:'edit/:id',component:NoteEditComponent}
  ];

  @NgModule({
    declarations :[
      
    ],
    imports: [
      RouterModule.forRoot(routes),
      FormsModule
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }