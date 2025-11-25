import { Component, AfterViewInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: false
})
export class MapaPage implements AfterViewInit {

  map: any;

  async ngAfterViewInit() {
    await this.loadGoogleMaps();
    await this.showMap();
  }

  loadGoogleMaps(): Promise<void> {
    return new Promise((resolve) => {
      // Si el script ya está cargado, no lo cargues otra vez
      if (document.getElementById('googleMapsScript')) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.id = 'googleMapsScript';
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAyzFTinCKELqPvAAjgkZebcIhamrLcjgo';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();

      document.body.appendChild(script);
    });
  }

  async showMap() {
    const position = await Geolocation.getCurrentPosition();

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const mapElement = document.getElementById('map');

    this.map = new google.maps.Map(mapElement, {
      center: { lat, lng },
      zoom: 16
    });

    new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
      title: 'Mi posición actual'
    });
  }
}
