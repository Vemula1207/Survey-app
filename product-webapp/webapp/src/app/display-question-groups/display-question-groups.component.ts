import { Component, OnInit } from '@angular/core';
import { questionGroupServices } from '../services/questionGroupServices';
import { Router } from '@angular/router';
import { CreateQuestionGroupComponent } from '../create-question-group/create-question-group.component';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
@Component({
  selector: 'app-display-question-groups',
  templateUrl: './display-question-groups.component.html',
  styleUrls: ['./display-question-groups.component.css']
})
export class DisplayQuestionGroupsComponent implements OnInit {
  
  public questionGroups : any = [];
  public time:any = "";
  errormsg:string="";
  spinner:boolean = true;
  constructor(private service :questionGroupServices,private router :Router,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.getAllQuestionGroups();
  }

  getAllQuestionGroups(){
    this.service.getQuestionGroup()
    .subscribe(data => {
      if(data){
        this.spinner = false;
      }
      this.questionGroups=data;
    },
      error => this.errormsg=error);
  }

  formatDate(momentDate) {
    this.time = moment(momentDate);
    return this.time.fromNow();
  }

  onselect(questionGroup){
    this.router.navigate(['/sidenav/displaygroups',questionGroup.groupTitle]);
  }
  createQuestionGroup()
  {
    const dialogForSelect = this.dialog.open(CreateQuestionGroupComponent);
    dialogForSelect.afterClosed().subscribe(result => {
      this.getAllQuestionGroups();
    })
  }
}
