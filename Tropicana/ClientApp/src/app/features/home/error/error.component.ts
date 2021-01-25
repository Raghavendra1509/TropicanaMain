import { Component, OnInit, ViewChild } from '@angular/core';
import { error } from 'protractor';
import { errors } from './../../../models/error';
import { ErrorService } from './../../../services/error.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorList: errors[];
  displayedColumns: string[] = ['id', 'message', 'level', 'timeStamp', 'userName'];
  dataSource: MatTableDataSource<errors>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ErrorService) { }

  ngOnInit(): void {
    this.errorList = [];
    this.getAllErrors();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllErrors(): void {
    this.service.getErrorListDetails().subscribe((data) => {
      this.errorList = data;
      this.dataSource = new MatTableDataSource(this.errorList);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
      error => {
        console.log('error', error);
      });
  }
}
