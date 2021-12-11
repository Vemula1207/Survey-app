export class User {
   name ?: string;
   email ?: string;
   userRole?:string
   age?:number;
   occupation?:string;
   edu?:string;
   interests?:string[];  
   constructor()
   {
       this.name="";
       this.email="";
       this.userRole="";
       this.age=0;
       this.occupation="";
       this.edu="";
       this.interests=[];
   }

}
