import Hero from "@/src/components/Hero/Hero";
import Flavours from "../src/components/Flavours/Flavours";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white gap-8 flex flex-col">
      <Hero></Hero>
      <Flavours></Flavours>
      <section
        style={{
          height: 418,
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Image src="/logo.png" alt="logo" width={359} height={359} />
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
              HELADOS
            </h2>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Image src="/logo.png" alt="logo" width={359} height={359} />
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
              PALETAS
            </h2>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Image src="/logo.png" alt="logo" width={359} height={359} />
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
              CHOCOLATES
            </h2>
          </div>
        </div>
      </section>

      {/* <section>
        <div style={{ display: "flex" }}>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "33%", textAlign: "center" }}>
            TEXTO IMAGEN 1
          </div>
          <div style={{ width: "33%", textAlign: "center" }}>
            TEXTO IMAGEN 2
          </div>
          <div style={{ width: "33%", textAlign: "center" }}>
            TEXTO IMAGEN 3
          </div>
        </div>
      </section> */}
    </main>
  );
}
