export class ResponseQuestion {
    questionBody?:string;
    options?:[]
    answered:number;
    optionsCount:Map<string,number>;
    label?:string[];
    data?:number[];
    subjectiveAnswer?:string[];

   constructor()
   {
       this.subjectiveAnswer=[];
   }





}
