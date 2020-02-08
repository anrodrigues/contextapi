import React, { useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import * as themes from './Themes/index'
import ShoppingCartContext from './components/shoppingCartBar/context';
import Bar from './components/shoppingCartBar/index';
import ListProduct from './components/listProduct/index';
import SwitchTheme from './components/switcherTheme/index';
export default function App() { 


  const [shoppingCar, setShoppingCar] = useState({
    totalValue: 0,
    qtd : 0,
    theme: themes.dark
  })  

  const AddToCar = (value) => {
    setShoppingCar( {
      totalValue: shoppingCar.totalValue + 1,
      qtd:  shoppingCar.qtd + value,
      theme: shoppingCar.theme
    })
  }

  const switchTheme = (value) => {
    setShoppingCar( {
      totalValue: shoppingCar.totalValue,
      qtd:  shoppingCar.qtd,
      theme: shoppingCar.theme === themes.dark ? themes.light: themes.dark
    })
  }

  useEffect(() => {
    console.log(shoppingCar.theme)
  }, [shoppingCar.theme])

  return (
    <>

    <ShoppingCartContext.Provider value={shoppingCar} >
      <ShoppingCartContext.Consumer>
        { shoppingCar =>(
          <ThemeProvider theme={shoppingCar.theme}>
            <Bar shoppingCar={shoppingCar}/>
            <ListProduct theme={shoppingCar.theme} AddToCar={AddToCar}/>
          </ThemeProvider> 
        )}
      </ShoppingCartContext.Consumer>
      <SwitchTheme switchTheme={switchTheme}/>
    </ShoppingCartContext.Provider>
    </>
  );
}
