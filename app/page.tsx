import Button from "../src/components/Button/Button";

export default function Home() {
  const test = () => {
    console.log("hola");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <Button onClick={test} label="HOLA" modifier="with-background"></Button>
    </main>
  );
}
