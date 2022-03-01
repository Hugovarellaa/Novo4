import React from 'react';
import { Text } from 'react-native';
import { Container, Header,UserInfo, Photo, User, UserGreeting,UserName } from './styles';

export function Dashboard(){
  return (
    <Container >
     <Header>

      <UserInfo>
        <Photo source={{uri: "https://github.com/Hugovarellaa.png" }}/>
        <User>
          <UserGreeting>Olá</UserGreeting>
          <UserName>Hugo</UserName>
        </User>
      </UserInfo>

     </Header>
    </Container>
  )
}

