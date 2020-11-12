import styles from "./Home.module.scss";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return [
    <div className={styles.home}>
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Next.js with Ionic</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen>
        <div>takotako</div>
        <Link href="/">
          <ion-button>home</ion-button>
        </Link>
      </ion-content>
    </div>,
  ];
}
