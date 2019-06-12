import { Component, OnInit } from '@angular/core';
import { MapBoxService } from '../_services/map-box.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private mapBoxService: MapBoxService) { }

  ngOnInit() {
    this.mapBoxService.initialize();
  }

}
