import React from "react";
import { HightlightCard } from "../components/HightlightCard";
import { TransactionCard } from "../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HightlightCards,
  Transactions,
  Title,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/Hugovarellaa.png" }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Hugo</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HightlightCards>
        <HightlightCard type="up" title="Entradas" amount="R$ 17.400,00" lastTransaction="Última entrada dia 13 de abril"/>
        <HightlightCard type="down" title="Saídas" amount="R$ 1.259,00" lastTransaction="Última saída dia 03 de abril"/>
        <HightlightCard type="total" title="Total" amount="R$ 16.141,00" lastTransaction="01 à 16 de abril"/>
      </HightlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionCard title="Desenvolvimento de site" amount="R$ 12.000,00" category={{
          name: "Vendas",
          icon: "dollar-sign"
        }} date="13/04/2020" />
      </Transactions>

    </Container>
  ); 
}
