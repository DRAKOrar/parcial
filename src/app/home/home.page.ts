import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  photo: string | undefined;

  ngOnInit() {
    this.startCamera();
  }

  startCamera() {
    const video = <HTMLVideoElement>document.getElementById('video');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream: MediaStream) => {
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.error("Error accessing the camera: ", err);
        });
    }
  }

  capturePhoto() {
    const video = <HTMLVideoElement>document.getElementById('video');
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const context = canvas.getContext('2d');

    if (video && canvas && context) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.photo = canvas.toDataURL('image/png');

      // Detener la cámara después de tomar la foto
      const mediaStream = video.srcObject as MediaStream;  // Aseguramos que es un MediaStream
      if (mediaStream && mediaStream.getTracks) {
        const tracks = mediaStream.getTracks();
        tracks.forEach(track => track.stop());
      } else {
        console.error("No se pudo acceder a las pistas de la cámara");
      }
    } else {
      console.error("No se pudo acceder a los elementos del DOM");
    }
  }
}
