import React, { useState, useEffect} from 'react';
import TodoList from './components/TodoList/index'
import ThemeSwitcher from './components/ThemeSwitcher/index'
import { ThemeProvider } from 'styled-components';
import * as themes from './Themes/index'
import ThemeContext  from './Themes/context'
import ShoppingCartContext from './components/shoppingCart/context';
import Bar from './components/shoppingCartBar/index'
import ListProduct from './components/listProduct/index'

export default function App() { 

  const [theme, setTheme] = useState(themes.dark)  

  const [shoppingCar, setShoppingCar] = useState({
    totalValue: 0,
    qtd : 0
  })  

  
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light: themes.dark)
  };

  const AddToCar = (value) => {
    setShoppingCar( {
      totalValue: shoppingCar.totalValue + 1,
      qtd:  shoppingCar.qtd + value
    })
  }

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <>

    <ShoppingCartContext.Provider value={shoppingCar} >
      <ShoppingCartContext.Consumer>
        { shoppingCar => <Bar shoppingCar={shoppingCar}/>}
      </ShoppingCartContext.Consumer>
      
      <ListProduct AddToCar={AddToCar}/>

    </ShoppingCartContext.Provider>
    
    <ThemeContext.Provider value={theme}>
      <ThemeSwitcher toggleTheme={toggleTheme}/>
      <ThemeContext.Consumer>
        { theme =>(
          <ThemeProvider theme={theme}>
            <TodoList />
          </ThemeProvider>
          )
        }
      </ThemeContext.Consumer>
     </ThemeContext.Provider>

    </>
  );
}
