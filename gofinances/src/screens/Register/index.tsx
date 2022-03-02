import React, { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/TransactionTypeButton";
import {
  Container,
  Header,
  Title,
  Forms,
  Fields,
  TransactionType,
} from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionTypeSelect( type: "up" | "down"){
    setTransactionType(type)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Forms>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionType>
            <TransactionTypeButton title="Income" type="up" onPress={()=> handleTransactionTypeSelect("up")} />
            <TransactionTypeButton title="Outcome" type="down" onPress={() => handleTransactionTypeSelect("down")} />
          </TransactionType>
        </Fields>
        <Button title="Enviar" />
      </Forms>
    </Container>
  );
}
