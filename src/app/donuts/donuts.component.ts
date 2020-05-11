import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../donuts.service';
import { Results, Donuts, Donut } from '../interfaces/donuts';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.scss'],
})
export class DonutsComponent implements OnInit {
  donuts:Results;
  showLoadingIndicator = false;

  constructor(
    private donutService:DonutsService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe(
      (data: Results) => this.donuts = { ...data }, 
      error => console.error(error)
    );

    this._router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart){
        this.showLoadingIndicator = true;
      }

      if(routerEvent instanceof NavigationEnd){
        this.showLoadingIndicator = false;
      }
    })
    
  }
}
