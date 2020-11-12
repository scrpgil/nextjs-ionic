import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const Title = styled.h1`
  color: red;
`;

export default function App() {
  return [
    <div className="container">
      <Link href="/home">
        <ion-button>home</ion-button>
      </Link>
      <Link href="/pas-pol">
        <ion-button>pas-pol</ion-button>
      </Link>
      <Title>Title</Title>
    </div>,
  ];
}
