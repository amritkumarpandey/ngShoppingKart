import { Component } from '@angular/core';
import { LoggingService } from '../LoggingService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [LoggingService]
})
export class AppComponent {
  constructor(private loggingService : LoggingService){

  }
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    const loggingService = new LoggingService();
    loggingService.log('Account ' + newAccount + ' has been successfully created!!');
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.log('The status of account with id: ' + updateInfo.id + ' has changed to ' +  updateInfo.newStatus);
  }
}
