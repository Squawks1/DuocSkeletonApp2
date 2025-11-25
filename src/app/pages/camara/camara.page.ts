import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
  standalone: false
})
export class CamaraPage {

  foto: string = '';

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.DataUrl
    });

    this.foto = image.dataUrl!;
  }
}
