import React from "react";
import FirstAndSecond from "./components/FirstAndSecond";
import Header from "./components/Header";
import { Main, Section, Sticky } from "./styles";
import { Globalstyles } from "./styles/global";

export function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Globalstyles />
      <Header />
      <Main style={{ height: "1610vh" }}>
        <Section style={{ height: "72.7%" }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: "937%" }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: "10.1%" }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  );
}
