import Button from "../src/components/Button/Button";
import FlexContainer from "../src/components/Layout/FlexContainer/FlexContainer";

export default function Home() {
  const test = () => {
    console.log("hola");
  };

  return (
    <main className="min-h-screen p-24 bg-white">
      <FlexContainer type="row">
        <Button onClick={test} modifier="with-background">
          Hola
        </Button>
        <Button onClick={test} modifier="with-background">
          Chau
        </Button>
      </FlexContainer>
    </main>
  );
}
