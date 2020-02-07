import React from 'react';
import styled from 'styled-components'

const List = styled.ul`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-family: 'Helvetica';

  li {
    line-height: 36px;
  }
`

const TodoList = ({ theme }) => (
  <List>
    { console.log(theme)}
    <li>Fazer café</li>  
    <li>Ler</li>  
    <li>Estudar</li>  
  </List>
)

export default TodoList;