import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { account } from './../../../models/accounts';
 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  accountList: account[];
  displayedColumns: string[] = ['id', 'userId', 'accountNumber', 'firstName', 'address'];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountList = [];
    this.getAccounts();
   
  }
  getAccounts() {

    this.accountService.getAccountDetails().subscribe((data) => {
      this.accountList.push(data);
      },
        error => {
          console.log('error', error);
        });
    }

}
