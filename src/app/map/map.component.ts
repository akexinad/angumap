import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-map',
  template: `
  <mgl-map
    [style]="'mapbox://styles/mapbox/streets-v9'"
    [zoom]="[9]"
    [center]="[-74.50, 40]"
  >
  </mgl-map>
  `,
  styles: [`
    mgl-map {
      position: absolute;
      height: 100%;
      width: 100%;
    }
  `]
})

export class MapComponent { }
