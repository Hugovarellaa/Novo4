import React from "react";
import { HightlightCard } from "../components/HightlightCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon
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
          <Icon name="power"/>
        </UserWrapper>
      </Header>
      <HightlightCard />
    </Container>
  );
}
