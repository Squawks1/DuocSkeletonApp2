import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage {

  lat: number = 0;
  lng: number = 0;

  async obtenerUbicacion() {
    const pos = await Geolocation.getCurrentPosition();
    this.lat = pos.coords.latitude;
    this.lng = pos.coords.longitude;
  }
}
