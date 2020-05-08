import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../donuts.service';
import { Results, Donuts, Donut } from '../interfaces/donuts';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.scss'],
})
export class DonutsComponent implements OnInit {
  donuts:Results;
  

  constructor(private donutService:DonutsService) { }

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe(
      (data: Results) => this.donuts = { ...data }, 
      error => console.error(error)
    );

    
  }
}
