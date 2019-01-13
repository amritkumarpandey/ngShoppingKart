import { Component,OnInit } from '@angular/core';

@Component({
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls: ['./app.component.css']

} )
export class AppComponent {
    serverElements:[{type:string,name:string , content:string}] = [{type:"server",name:"Amrit",content:"Pandey"}];
    newServerName:string="";
    newServerContent:string = "";

    onInit(){
        this.serverElements.push({type:"server",name:"Amrit",content:"Pandey"});
    }

    addNewServer(){
        this.serverElements.push({
            type:'Server',
            name:this.newServerName,
            content:this.newServerContent
        });
        
    }

    addNewBlueprint(){
        this.serverElements.push({
            type:'Blueprint',
            name:this.newServerName,
            content:this.newServerContent
        });
        
    }
    
}