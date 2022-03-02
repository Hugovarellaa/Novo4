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

export type TransactionCardProps = {
  type: "positive" | "negative" ;
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface ITransactionCardProps {
  data: TransactionCardProps
}

export function TransactionCard({data}: ITransactionCardProps) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === "negative" && "- " }
        {data.amount}
        </Amount>
      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryNAme>{data.category.name}</CategoryNAme>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
