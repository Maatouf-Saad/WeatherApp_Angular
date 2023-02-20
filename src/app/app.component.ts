import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.module';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {
    
  }

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData('Paris')
      .subscribe(data => {
        this.weatherData = data;
         console.log(data);
      });
  }
}