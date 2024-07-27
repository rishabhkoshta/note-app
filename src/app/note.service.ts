import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note.model';
import { not } from 'rxjs/internal/util/not';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl = 'https://note-app20240727000759.azurewebsites.net/api/note'; 

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  getNoteById(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/${id}`);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note);
  }
  
  updateNote(note: Note): Observable<Note> {
    console.log(note.id+note.content+note.title);
    return this.http.put<Note>(`${this.apiUrl}/${note.id}`, note);
  }

  deleteNote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
