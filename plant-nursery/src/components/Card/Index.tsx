import React from 'react';
import { ItemContainer, Title, Description, Image, ItemContent, Button } from './styles';
import {ArrowRight} from 'phosphor-react';

interface ItemProps {
  title: string;
  price: string;
  src: string;
}

const Item: React.FC<ItemProps> = ({ title, price, src }) => {
  return (
    <ItemContainer>
      <Image src={src} ></Image>
      <ItemContent>
          <Title>{title}</Title>
          <Description>{price}</Description>
          <Button>Comprar <ArrowRight/> </Button>
      </ItemContent>
     
    </ItemContainer>
  );
};

export default Item;
