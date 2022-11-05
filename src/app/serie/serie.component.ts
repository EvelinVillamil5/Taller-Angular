import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {


  series: Array<Serie> = [];
  averageSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      // Average seasons
      let seasons = 0;
      series.forEach(serie => seasons += serie.seasons);
      this.averageSeasons = seasons/series.length;
    });
  }

  ngOnInit(){
    this.getSeries();
  }

}