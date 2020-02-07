import React, {useState} from 'react';
import styled from 'styled-components';


const List = styled.div`
  width: 100%;
  height: auto;
  padding: 30px 10px;
  background-color: #ffffe4;

  .productIten {
    display: flex;
    width: 400px;
    height: 60px;
    border: 3px black solid;
    margin: 20px auto;
    padding: 5px 15px;
    justify-content: space-between;
    align-items: center;

    button {
      width: auto;
      height: 30px;
      background: transparent;
      border: 2px black solid;
      cursor: pointer;
    }
  }
`

const ListProduct = ( {AddToCar} ) =>{

  const [products, setProducts] = useState(
    [
      {
        id: 1,
        name: 'Produto 1',
        price: 500.00
      },
      {
        id: 2,
        name: 'Produto 2',
        price: 200.00
      },
      {
        id: 3,
        name: 'Produto 3',
        price: 700.00
      }
    ]
  )

  return(
    <List>
      {products.map(product => {
        return (
          <div key={product.id} className="productIten">
            <div className="productTitle">{product.name} - R$ {product.price}</div>
            <button onClick={ () => AddToCar(product.price)} >Adicionar ao carrinho</button>
          </div>
        )
      })}
  
    </List>
  )

}
export default ListProduct;