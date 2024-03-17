import Hero from "@/src/components/Hero/Hero";
import Flavours from "../src/components/Flavours/Flavours";
import Image from "next/image";
import Card from "../src/components/Card/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-white gap-8 flex flex-col">
      <Hero></Hero>
      <Flavours text="NUESTROS PRODUCTOS"></Flavours>
      <section
        style={{
          height: 418,
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
        }}
      >
        <Card
          imageUrl="https://www.valence.com.ar/wp-content/uploads/2020/05/banner-1.jpg"
          text="HELADOS"
        />
        <Card
          imageUrl="https://www.valence.com.ar/wp-content/uploads/2020/05/banner2.jpg"
          text="PALETAS"
        />
        <Card
          imageUrl="https://www.valence.com.ar/wp-content/uploads/2023/10/Foto-Chocolates-valence-home-scaled-e1709050943161.jpeg"
          text="CHOCOLATES"
        />
      </section>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#93805c",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            maxWidth: 1080,
            padding: "30px 50px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "100%",
              width: 150,
              height: 120,
              marginRight: 30,
            }}
          ></div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ fontSize: 33, fontWeight: 600, lineHeight: "1.1" }}>
              ¡CONVERTITE EN UN INSTAVIDENTE VALENCEADO Y SEGUINOS!
            </h1>
            <h3 style={{ fontSize: 20, fontWeight: 500, marginTop: 15 }}>
              ¡PARTICIPÁ DE NUESTROS SORTEOS!
            </h3>
          </div>
        </div>
      </section>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
        }}
      >
        <Image
          src={
            "https://www.valence.com.ar/wp-content/uploads/2024/02/Paleta-Kiwi.jpg"
          }
          alt="logo"
          width={366.6}
          height={366.6}
        />
        <Image
          src={
            "https://www.valence.com.ar/wp-content/uploads/2024/02/Helado-DDL.jpg"
          }
          alt="logo"
          width={366.6}
          height={366.6}
        />
        <Image
          src={
            "https://www.valence.com.ar/wp-content/uploads/2024/02/Postre-Almendras.jpg"
          }
          alt="logo"
          width={366.6}
          height={366.6}
        />
        <Image
          src={
            "https://www.valence.com.ar/wp-content/uploads/2024/02/Paleta-Chocolate.jpg"
          }
          alt="logo"
          width={366.6}
          height={366.6}
        />
        <Image
          src={
            "https://www.valence.com.ar/wp-content/uploads/2024/02/Postre-Frambuesa.jpg"
          }
          alt="logo"
          width={366.6}
          height={366.6}
        />
        <Image
          src={
            "https://www.valence.com.ar/wp-content/uploads/2024/02/Helado-Pistacho.jpg"
          }
          alt="logo"
          width={366.6}
          height={366.6}
        />
      </section>
      <Flavours text="NUESTROS SABORES"></Flavours>
      <section></section>
    </main>
  );
}
