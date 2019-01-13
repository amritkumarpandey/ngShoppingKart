import { Component,OnInit } from '@angular/core';

@Component({
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls: ['./app.component.css']

} )
export class AppComponent {
    serverElements /*:[{type:string,name:string , content:string}] */= [];  /*[{type:"server",name:"Amrit",content:"Pandey"}];*/
  

    ngOnInit(){
        //this.serverElements.push({type:"server",name:"Amrit",content:"Pandey"});
    }

    onServerAdded(serverData:{name:string , content:string}){
        this.serverElements.push({
            type: 'Server',
            name: serverData.name,
            content: serverData.content
        });
    }
    

    onBlueprintAdded(blueprintData:{name:string , content:string}){
        this.serverElements.push({
            type: 'Blueprint',
            name: blueprintData.name,
            content: blueprintData.content
        });
    }
    
    
}