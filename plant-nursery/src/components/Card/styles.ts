import React from 'react';
import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  width: 360px;
  gap: 30px;
  background-color: #fff;
  margin-top: 40px;
  
`;

export const ItemContent = styled.div`
      display: flex;
      flex-direction: column;
      align-items: baseline;
      gap: 8px;
      
`
export const Button = styled.button`
      display: flex;
      align-items: center;
      border: none;
      color: ${(props) => props.theme['yellow-100']};
      background: ${(props) => props.theme['white']};
      cursor: pointer;

`


export const Title = styled.h3`
  font-family: Elsie Swash Caps;
  color: #333;
`;

export const Description = styled.span`
  color: #666;
`;

export const Image = styled.img`
    width: 200px;
    height: 200px;
`