import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  color: ${props => props.theme.color};
  width: 100%;
  height: 80px;
  background:${props => props.theme.bgBar};
  display: flex;
  align-items: center;
  justify-content: center;
  border:${props => `2px  ${props.theme.border} solid` } ;

  .CarStatus {
    background:${props => props.theme.bgBar};
    padding: 3px 15px;
    width: auto;
    height: 30px;
    border:${props => `2px  ${props.theme.border} solid` } ;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const shoppingCartBar = ( {shoppingCar} ) => {
  console.log(shoppingCar.theme.background)
  return (
    <Bar>
      <div className="CarStatus">
        <p>Qtd: {shoppingCar.totalValue} Total: R$ {shoppingCar.qtd}</p>
      </div>
    </Bar>
  )
}

export default shoppingCartBar;