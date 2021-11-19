import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usrId = '';
  isSaving = false;
  inValidUser= false;
  errorMessage = 'Invalid User ID';

  constructor(
    private service:UserDataService
  ) { }

  ngOnInit(): void {
  }

  handleActivate(): void {
    console.log('usrId  ' + this.usrId);
    if(this.usrId === null || this.usrId === '')
      this.inValidUser = true;
    
    console.log(this.service.activateUser());

    this.service.activateUser().subscribe(
      response => this.handleResponse(response)
    );
  }

  private handleResponse(response: any) {
    console.log(response);
    // throw new Error('Method not implemented.');
  }

}
