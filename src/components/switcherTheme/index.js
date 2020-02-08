import React from 'react'

const switchTheme = ({switchTheme}) => 
     (
        <>
        <select onChange={switchTheme}>
            <option> Dark </option>
            <option> Light </option>
        </select>
        </>
    )


export default switchTheme;
