
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return [
    <div>
      <header className="l-header">
        <h1 className="m-siteLogo">
          <a href="/pas-pol"></a>
        </h1>
      </header>
      <div className="main-visual">
        <img src="/pas-pol/main_visual.jpg" alt="Picture of the author" />
      </div>
    </div>,
  ];
}
