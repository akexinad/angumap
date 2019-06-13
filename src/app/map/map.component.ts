import { Component, OnInit } from '@angular/core';
import { MapBoxService } from '../_services/map-box.service';
import * as mapboxgl from 'mapbox-gl';

import * as fsr from '../geojson/fsr.json';
import * as countries from '../geojson/countries.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private mapBoxService: MapBoxService) { }

  ngOnInit() {
    this.mapBoxService.initialize();
    this.showLayers();
  }

  showLayers() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [151.119124, -33.862277],
      zoom: 12
    });

    map.on('load', () => {

      map.addLayer({
        id: 'fsr',
        type: 'fill',
        source: {
          type: 'geojson',
          data: fsr.default
        },
        layout: {
          visibility: 'visible'
        },
        paint: {
          'fill-color': '#d40000',
          'fill-opacity': 0.4
        }
      });

      map.addLayer({
        id: 'countries',
        type: 'line',
        source: {
          type: 'geojson',
          data: countries.default
        },
        layout: {
          visibility: 'visible',
        },
        paint: {
          'line-color': '#d40000',
          'line-opacity': 1,
          'line-width': 4
        }
      });
    });
  }
}
