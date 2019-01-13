import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName:string="";
  newServerContent:string = "";

  // emitter 
 @Output('srvAdded') serverAdded = new EventEmitter<{name:string , content:string}>();
 @Output('blueprintAdded') blueprintAdded = new EventEmitter<{name:string , content:string}>();
  constructor() { }

  ngOnInit() {
  }

  addNewServer(){
    // this.serverElements.push({
    //     type:'Server',
    //     name:this.newServerName,
    //     content:this.newServerContent
    // });
    this.serverAdded.emit({name: this.newServerName, content: this.newServerContent});
    
}

addNewBlueprint(){
    // this.serverElements.push({
    //     type:'Blueprint',
    //     name:this.newServerName,
    //     content:this.newServerContent
    // });
    this.blueprintAdded.emit({name: this.newServerName, content: this.newServerContent});
}

}
