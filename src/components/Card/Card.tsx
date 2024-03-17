import { FC } from "react";
import Image from "next/image";

type CardProps = {
  imageUrl: string;
  text: string;
};

const Card: FC<CardProps> = ({ imageUrl, text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 10,
      }}
    >
      <Image src={imageUrl} alt="logo" width={359} height={359} />
      <div
        style={{
          width: "100%",
          padding: 5,
          background: "#93805c",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "white",
            fontFamily: '"Roboto", Sans-serif',
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          {text}
        </h2>
      </div>
    </div>
  );
};

export default Card;
