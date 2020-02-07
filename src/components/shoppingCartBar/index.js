import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  width: 100%;
  height: 80px;
  background:#f15d5d;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black;


  .CarStatus {
    background: white;
    width: 30px;
    height: 30px;
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const shoppingCartBar = ( {shoppingCar} ) => {
  return (
    <Bar>
      <div className="CarStatus">
        <p>{shoppingCar.totalValue} {shoppingCar.qtd}</p>
      </div>
    </Bar>
  )
}

export default shoppingCartBar;