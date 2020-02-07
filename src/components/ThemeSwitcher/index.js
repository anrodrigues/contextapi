import React from 'react';
import styled from 'styled-components';

const Swicher = styled.button`
  padding: 8px 10px;
  background: #2ba4e2;
  border: none;
  color: white;
  cursor: pointer;
`

const ThemeSwitcher = ({toggleTheme}) => {
  return(
      <Swicher onClick={ toggleTheme }>Altera tema</Swicher>
  )
}

export default ThemeSwitcher;