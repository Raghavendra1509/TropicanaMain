import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { from, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/security/authentication.service';
import { LoaderService } from './../services/loader.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn$:  boolean;     
  notify: string = "";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router,
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    public loaderService: LoaderService) {
  }

  ngOnInit(): void {
    
      this.route.queryParams.subscribe(params => {
        if (params.success === 'true') {
          this.notify = 'You have passed data';
        }
      });
  }

  logout(): void {
    this.auth.logout();
  }



}
