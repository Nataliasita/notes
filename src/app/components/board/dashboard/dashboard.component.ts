import { Component, OnInit } from '@angular/core';
import{ DataNotes } from 'src/app/models/data-notes'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  messageEdit!:string;
  flag=false;

  public formNote!:FormGroup 

  notesArray: DataNotes[] = [
    {id:1,title:'Note 1', description:'prueba'},
    {id:2,title:'Note 2', description:'prueba'},
    {id:3,title:'Note 3', description:'prueba'}
  ];

  selectedNote: DataNotes =new DataNotes();


  constructor( private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.formNote = this.formBuilder.group({
      id:[''],
      title:['', [
        Validators.required,
        Validators.minLength(4),
      ],
    ],
      description:['', [
        Validators.required,
        Validators.minLength(4),
      ],
    ]
    });
  }

  addOrEdit(){
    if(this.selectedNote.id === 0){
    this.selectedNote.id = this.notesArray.length + 1;
    this.notesArray.push(this.selectedNote);
    
  }
    this.selectedNote = new DataNotes();
    this.messageEdit='';
  }

  editNote(note:DataNotes){
    this.selectedNote = note;
    this.messageEdit='Edit Note';
    this.flag=true;
  }
  deleteNote(){
    this.notesArray = this.notesArray.filter(x => x != this.selectedNote);
    this.selectedNote = new DataNotes();
    this.messageEdit='';
    this.flag=false;
  }

}
