import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sSkyPlayer: Element;
  constructor(
    private platform: Platform,
    ) {
    this.platform.ready().then(async () => {
    const script = document.createElement('script');
      script.type = 'text/javascript';
       script.src = 'https://play.sundaysky.com/main/sundaysky-player.grey.en-us.js';
        script.async = true;
         document.head.appendChild(script);
    });
  }

  ionViewWillEnter() {
    this.sSkyPlayer = document.createElement('sundaysky-video');
    this.sSkyPlayer.setAttribute('id', 'sskyplayer');
    this.sSkyPlayer.setAttribute('analytics-token', '');
    // eslint-disable-next-line max-len
    this.sSkyPlayer.setAttribute('session', 'eyJwcm9qZWN0aWQiOiJTdW5kYXlTa3ktSW50ZWdyYXRpb24tdGVzdC00MDctIiwicmVxdWVzdElkIjoiMjQ5NjEyN2MtMDI4Ny00NjAxLWJmNzctYjAxYjNhNTY1MDQyIiwiX2xpbmtzIjp7InZpZGVvLXN0cmVhbSI6W3siaHJlZiI6Imh0dHBzOi8vc3RyZWFtcy1lZGdlLndlYi5zdW5kYXlza3kuY29tL20zdTgvcjMwbS8wNS9wcm9kLTAwOS9TRi0wMDAwMDI4NS8yMDIxMDgxOS8xNjI5MzgxNTMwMDU5L2E0OGVhY2NmLTBjYmQtNDY5Ny1hYTU3LTFjODdhNDkwY2Q4NS92aWRlby5tYXN0ZXIubTN1OD9kaXN0cmlidXRlZD10cnVlJnBpZD1TRi0wMDAwMDI4NSUyRlN1bmRheVNreS1JbnRlZ3JhdGlvbi10ZXN0LTQwNy1fdWF0JnJpZD0yNDk2MTI3Yy0wMjg3LTQ2MDEtYmY3Ny1iMDFiM2E1NjUwNDImY2h1bmtJZD0wIiwiaWQiOiJ2aWRlbyIsIm1lZGlhLXR5cGUiOiJhcHBsaWNhdGlvbi94LW1wZWdVUkwifV0sIm1ldGFkYXRhIjp7ImhyZWYiOiJodHRwczovL3N0cmVhbXMtZWRnZS53ZWIuc3VuZGF5c2t5LmNvbS9jb250ZW50L3IzMG0vMDUvcHJvZC0wMDkvU0YtMDAwMDAyODUvMjAyMTA4MTkvMTYyOTM4MTUzMDA1OS9hNDhlYWNjZi0wY2JkLTQ2OTctYWE1Ny0xYzg3YTQ5MGNkODUvbWV0YWRhdGEuanNvbj9kaXN0cmlidXRlZD10cnVlJnBpZD1TRi0wMDAwMDI4NSUyRlN1bmRheVNreS1JbnRlZ3JhdGlvbi10ZXN0LTQwNy1fdWF0JnJpZD0yNDk2MTI3Yy0wMjg3LTQ2MDEtYmY3Ny1iMDFiM2E1NjUwNDImY2h1bmtJZD0wIn0sInRyYW5zY3JpcHQiOnsiaHJlZiI6Imh0dHBzOi8vc3RyZWFtcy1lZGdlLndlYi5zdW5kYXlza3kuY29tL2NvbnRlbnQvcjMwbS8wNS9wcm9kLTAwOS9TRi0wMDAwMDI4NS8yMDIxMDgxOS8xNjI5MzgxNTMwMDU5L2E0OGVhY2NmLTBjYmQtNDY5Ny1hYTU3LTFjODdhNDkwY2Q4NS90cmFuc2NyaXB0LnNydD9kaXN0cmlidXRlZD10cnVlJnBpZD1TRi0wMDAwMDI4NSUyRlN1bmRheVNreS1JbnRlZ3JhdGlvbi10ZXN0LTQwNy1fdWF0JnJpZD0yNDk2MTI3Yy0wMjg3LTQ2MDEtYmY3Ny1iMDFiM2E1NjUwNDImY2h1bmtJZD0wIn0sInNlbGYiOnsiaHJlZiI6Imh0dHBzOi8vc3RyZWFtcy1lZGdlLndlYi5zdW5kYXlza3kuY29tL2NvbnRlbnQvcjMwbS8wNS9wcm9kLTAwOS9TRi0wMDAwMDI4NS8yMDIxMDgxOS8xNjI5MzgxNTMwMDU5L2E0OGVhY2NmLTBjYmQtNDY5Ny1hYTU3LTFjODdhNDkwY2Q4NS9zdGF0dXMuanNvbj9kaXN0cmlidXRlZD10cnVlJnBpZD1TRi0wMDAwMDI4NSUyRlN1bmRheVNreS1JbnRlZ3JhdGlvbi10ZXN0LTQwNy1fdWF0JnJpZD0yNDk2MTI3Yy0wMjg3LTQ2MDEtYmY3Ny1iMDFiM2E1NjUwNDImY2h1bmtJZD0wIn0sImNhcHRpb25zIjp7ImhyZWYiOiJodHRwczovL3N0cmVhbXMtZWRnZS53ZWIuc3VuZGF5c2t5LmNvbS9jb250ZW50L3IzMG0vMDUvcHJvZC0wMDkvU0YtMDAwMDAyODUvMjAyMTA4MTkvMTYyOTM4MTUzMDA1OS9hNDhlYWNjZi0wY2JkLTQ2OTctYWE1Ny0xYzg3YTQ5MGNkODUvdmlkZW8ud2VidnR0P2Rpc3RyaWJ1dGVkPXRydWUmcGlkPVNGLTAwMDAwMjg1JTJGU3VuZGF5U2t5LUludGVncmF0aW9uLXRlc3QtNDA3LV91YXQmcmlkPTI0OTYxMjdjLTAyODctNDYwMS1iZjc3LWIwMWIzYTU2NTA0MiZjaHVua0lkPTAifSwiZGVzY3JpcHRpdmUtdHJhbnNjcmlwdCI6eyJocmVmIjoiaHR0cHM6Ly9zdHJlYW1zLWVkZ2Uud2ViLnN1bmRheXNreS5jb20vY29udGVudC9yMzBtLzA1L3Byb2QtMDA5L1NGLTAwMDAwMjg1LzIwMjEwODE5LzE2MjkzODE1MzAwNTkvYTQ4ZWFjY2YtMGNiZC00Njk3LWFhNTctMWM4N2E0OTBjZDg1L2Rlc2NyaXB0aXZlLXRyYW5zY3JpcHQuc3J0P2Rpc3RyaWJ1dGVkPXRydWUmcGlkPVNGLTAwMDAwMjg1JTJGU3VuZGF5U2t5LUludGVncmF0aW9uLXRlc3QtNDA3LV91YXQmcmlkPTI0OTYxMjdjLTAyODctNDYwMS1iZjc3LWIwMWIzYTU2NTA0MiZjaHVua0lkPTAifX19');
    this.sSkyPlayer.setAttribute('transcript-button', 'show');
    this.sSkyPlayer.setAttribute('poster', '');
    this.sSkyPlayer.setAttribute('no-autoplay','');
    document.getElementById('sskydiv').appendChild(this.sSkyPlayer);
  }

  ionViewWillLeave() {
    this.sSkyPlayer.remove();
  }
}
