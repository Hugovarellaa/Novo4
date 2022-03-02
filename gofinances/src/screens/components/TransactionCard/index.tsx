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

interface ITransactionCardProps {
  title: string;
  amount: string;
  category: Category;
  date: string;
}

export function TransactionCard({
  title,
  amount,
  category,
  date,
}: ITransactionCardProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryNAme>{category.name}</CategoryNAme>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
}
