import Image from "next/image";

export default function App() {
  return [
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Next.js with Ionic</ion-title>
      </ion-toolbar>
    </ion-header>,
    <ion-content fullscreen>
      <ion-refresher slot="fixed" closeDuration="10ms">
        <ion-refresher-content />
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            <ion-card-title>Card Title</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <Image
              src="/images.png"
              alt="Picture of the author"
              width={500}
              height={300}
            />
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </ion-card-content>
        </ion-card>
      </ion-refresher>
    </ion-content>,
  ];
}
