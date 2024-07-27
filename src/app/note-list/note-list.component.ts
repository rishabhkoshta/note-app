import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-note-list',
  standalone:true,
  imports : [NgFor,RouterModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent implements OnInit {

  notes : any[] = [];

  constructor(private noteService : NoteService)
  {

  }

  ngOnInit(): void {
    this.loadNote();
  }

  loadNote():void{
    this.noteService.getNotes().subscribe( notes=> this.notes = notes);
  }
  
  deleteNote(id: number): void {
    this.noteService.deleteNote(id).subscribe(() => this.loadNote());
  }

}
