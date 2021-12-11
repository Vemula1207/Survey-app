import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateQuestionGroupComponent } from '../create-question-group/create-question-group.component';
@Component({
  selector: 'app-create-question-group-dialog',
  templateUrl: './create-question-group-dialog.component.html',
  styleUrls: ['./create-question-group-dialog.component.css']
})
export class CreateQuestionGroupDialogComponent implements OnInit {

 
  constructor(public dialog:MatDialog) 
  {

   }
   openDialog()
   {
    this.dialog.open(CreateQuestionGroupComponent);

   }

  ngOnInit(): void {
  }

}
