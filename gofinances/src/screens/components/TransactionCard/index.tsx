import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryNAme,
  Date,
} from "./styles";

type Category = {
  name: string;
  icon: string;
};

type Data = {
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface ITransactionCardProps {
  data: Data
}

export function TransactionCard({data}: ITransactionCardProps) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryNAme>{data.category.name}</CategoryNAme>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
