import { Component, OnInit } from '@angular/core';
import { ResponseAnalysis } from '../model/response-analysis';
import { ResponseQuestion } from '../model/response-question';
import { ChartDataSets, ChartOptions,ChartType } from 'chart.js';
import { Color,Label} from 'ng2-charts'
import { ActivatedRoute } from '@angular/router';
import { ActiveSurveyService } from '../services/activeSurvey.service';


//import * as pluginLabels from 'chartjs-plugin-labels';
const pluginLabels = require('chartjs-plugin-labels')
@Component({
  selector: 'app-response-analysis',
  templateUrl: './response-analysis.component.html',
  styleUrls: ['./response-analysis.component.css']
})
export class ResponseAnalysisComponent implements OnInit {
  responses: ResponseAnalysis[] = [];
  questions = [];
  questionList: ResponseQuestion[] = [];
  questionMCQ:ResponseQuestion[] = [];

  totalResponse: number;
  public page: Number = 1;
  pageEvent :any;
  surveyTitle="Student Feedback Survey"
  surveyId="";
  pieChartPlugins = [];
  pieChartOptions: ChartOptions;



  constructor(private responseService: ActiveSurveyService,private activatedRoute: ActivatedRoute) {
    //console.log(this.responses)

  }

  ngOnInit(): void {
    this.pieChartPlugins = [pluginLabels];

    this.surveyId = this.activatedRoute.snapshot.paramMap.get('surveyId');
    this.surveyTitle = this.activatedRoute.snapshot.paramMap.get('surveyTitle');
    this.pieChartOptions = this.createOptions();


    console.log(this.surveyId)
    this.responseService.getResponse(this.surveyId).subscribe(data => {
      this.responses = data;
      this.totalResponse = this.responses.length
      this.responses[0].questionResponseList.forEach((x) => {
        this.questions.push(x)
      })


      this.questions.forEach(x => {
        let temp = new ResponseQuestion();
        temp.questionBody = x.questionBody;
        temp.options = x.options;
        this.questionList.push(temp);
      })
      console.log(this.questionList);


      this.questionList.forEach(question => {
        let count = 0;
        if(question.options.length!=0){
        let countMap: Map<string, number> = new Map<string,number>();
        question.options.forEach(option=>{
          countMap.set(option,0); })
        this.responses.forEach(response => {
          response.questionResponseList.forEach(tempQuestion => {
            if (tempQuestion.questionBody == question.questionBody) {
              if (tempQuestion.answers.length != 0 ) {
                count = count + 1;
                tempQuestion.answers.forEach(answer=>{
                  countMap.set(answer,countMap.get(answer)+1)

                })

              }
            }
          })

        })
        question.optionsCount=countMap;
        
        question.answered = count;
        let a:string[]=[];
        let b:number[]=[];
        question.optionsCount.forEach((value: number, key: string) => {
          a.push(key);
          b.push(value);
          console.log(key,value)

        })

        question.label=a;
        question.data=b;
        console.log(question.label)
      
      }
      else{
        //logic for subjective
        let tempAnswer:string[];
        let answerString:"";
       // question.subjectiveAnswer=[];
        this.responses.forEach(response => {
          response.questionResponseList.forEach(tempQuestion => {
            if (tempQuestion.questionBody == question.questionBody) {
              if (tempQuestion.answers.length !=0) {
                count = count + 1;
                tempQuestion.answers.forEach(answer=>{ question.subjectiveAnswer.push(answer)})
              
                
              }

              
                
              }
            })
        
        })
        
        question.answered = count;

      
     
     }
    })
    this.questionList.forEach(quest=>{
      if(quest.options.length!=0)
      {
        this.questionMCQ.push(quest);
      }
    })
      
    this.filteredArray = this.questionList.slice(0, this.defaultRecords);



    },
      error => {
        console.log(error)
      });
  }


  
 




  pieChartColors = [
    {
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
      'rgba(255,165,0,0.9)',
      'rgba(139, 136, 136, 0.9)',
      'rgba(255, 161, 181, 0.9)',
      'rgba(255, 102, 0, 0.9)'
      ]    },
  ];



  filteredArray: any[] = []

  defaultRecords: any = 1;

 
  onPageChange($event) {
    this.filteredArray =  this.questionList.slice($event.pageIndex*$event.pageSize,
    $event.pageIndex*$event.pageSize + $event.pageSize);
  }
  private createOptions(): ChartOptions {
    return {
      responsive: true,
          maintainAspectRatio: true,
          plugins: {
              labels: {
                render: 'datalabel',
                fontColor: ['green', 'white', 'red'],
                precision: 2
              }
          },
    };
  }


}
