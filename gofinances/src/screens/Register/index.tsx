import React from "react";
import { Input } from "../components/Forms/Input";
import { Container, Header, Title, Forms } from "./styles";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Forms>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
      </Forms>
    </Container>
  );
}
