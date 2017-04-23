import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { processes } from '../assets/processes';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedProcess: string;
  selectedLight: string;
  lightOn: boolean;
  processList: Object;

  constructor(private http: Http) {
    this.lightOn = false;
    this.processList = processes;
  }

  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/process/SCAN`).subscribe();
  }

  toggleLight(light: string): void {
    this.lightOn = ! this.lightOn;

    const process = this.lightOn ? 'POWER_ON' : 'POWER_OFF';
    this.sendProcess(process, light);
  }

  sendProcess(process: string, light?: string): void {
    let url = `${environment.apiUrl}/process/${process}`;

    if (light) {
      url += `/light/${light}`;
    }

    this.http.get(url).subscribe();
  }
}
