import { Component, input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NoteService } from '../note.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-note-edit',
  standalone: true,
  imports: [FormsModule,RouterModule,NgIf],
  templateUrl: './note-edit.component.html',
  styleUrl: './note-edit.component.css'
})
export class NoteEditComponent implements OnInit {

 note = { id: 0, title: '', content: '' };
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')! ;
    if (id !== 'new') {
      this.noteService.getNoteById(+id).subscribe(note => this.note = note);
    }
  }

  saveNote(): void {
    if (this.note.id) {
      console.log('update service');
      this.noteService.updateNote(this.note).subscribe(() => this.router.navigate(['/notes']));
    } else {
      
      this.noteService.getNotes().subscribe(notes => {
        const highestId = notes.reduce((maxId, note) => Math.max(note.id, maxId), 0);
        this.note.id = highestId + 1;
        this.noteService.createNote(this.note).subscribe(() => {
          this.router.navigate(['/']);
        });
      });
      //this.noteService.createNote(this.note).subscribe(() => this.router.navigate(['/notes']));
    }
  }

  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
