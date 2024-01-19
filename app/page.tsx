import Hero from "@/src/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
   //TODO: PONER IMAGEN EN EL DIV LINEA 11
   //TODO: COMPONETIZAR LAS IMAGENES

  return (
    <main className="min-h-screen p-24 bg-white">
      <Hero></Hero>
      <div>QUE COMIENCE LA PAPPETEADA</div>
      <section>
        <div style={{ display: "flex" }}>
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            style={{ width: "33%" }}
            height={100}
          />
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            style={{ width: "33%" }}
            height={100}
          />
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            style={{ width: "33%" }}
            height={100}
          />
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
      </section>
    </main>
  );
}
