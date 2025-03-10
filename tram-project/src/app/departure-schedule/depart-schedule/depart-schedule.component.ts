import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common'
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-depart-schedule',
  templateUrl: './depart-schedule.component.html',
  styleUrls: ['./depart-schedule.component.css']
})
export class DepartScheduleComponent {
  @ViewChild('tramCardsSection') tramCardsSection!: ElementRef;
  startStation = "Luma";
  endStation = "Linde"
  selectedMode: string = '';
  data: any

  constructor(private scroller: ViewportScroller, private dataService: DataService){}


  // This lifecycle hook is called to fetch the data from the json file Here.
  ngOnInit(): void {
    this.dataService.getDataFromGoogleDrive().subscribe(
      (response) => {
        this.data = response;
        console.log('Data fetched successfully:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

    // This function filters the trams running between the source and destination
  filterTramsToLinde() {
    return this.data.departures.filter((val: { line: { transport_mode: string; }; direction_code: number; })=> val.line.transport_mode.toLowerCase() == this.selectedMode.toLowerCase() && val.direction_code == 1);
  }

  // This function filters the buses running between the source and destination
  filterBusToLinde() {
    return this.data.departures.filter((val: { line: { transport_mode: string; }; direction_code: number; })=> val.line.transport_mode.toLowerCase() == this.selectedMode.toLowerCase() && val.direction_code == 2);
  }

  //This function handles the selction of buses or trams and call the filter function based on selection
  // and focuses the page on that particular area
  onCardClick(mode: string) {
    this.selectedMode = mode;
    setTimeout(() => {
      if (this.selectedMode == 'tram') {
        this.filterTramsToLinde()
        this.scroller.scrollToAnchor("tramcardssection");
      }else if(this.selectedMode == 'bus'){
        this.filterBusToLinde()
        this.scroller.scrollToAnchor("buscardssection");
      }
    }, 0);
  }
}
