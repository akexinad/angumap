import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import key from '../keys/mapBoxApi';

@Injectable({
  providedIn: 'root'
})

export class MapBoxService {

  constructor() { }

  initialize() {
    mapboxgl.accessToken = key;
  }
}
