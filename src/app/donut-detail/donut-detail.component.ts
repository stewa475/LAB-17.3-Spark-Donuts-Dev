import { Component, OnInit, Input } from '@angular/core';
import { DonutsService } from '../donuts.service';
import { Results, Donuts, Donut } from '../interfaces/donuts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.scss'],
})
export class DonutDetailComponent implements OnInit {
  donut: Donut;
  id: number;

  constructor(
    private donutService: DonutsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.donutService.getOneDonut(this.id).subscribe(
        (data:Donut) => this.donut = { ...data},
        error => console.error(error)
      );
    });
  }
}
