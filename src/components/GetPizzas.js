import React, { useEffect, useState } from 'react';
import { api } from '../services';
import AppMenu from './AppMenu';

const GetPizzas = () => {

const [pizzas, setPizzas] = useState([]);

useEffect(() => {
    if(pizzas.length == 0){
    api.get('/pizzas').then((response)=>{
        setPizzas(response.data);
        console.log(pizzas);
    })
}
console.log(pizzas)
}, [pizzas])

    return (
        <>
        < AppMenu selectedKey='4'/>
        {pizzas.map((pizza)=> <div>
        <img src={pizza.img} style={{width: '100px', margin: '16px'}} />
        {pizza.name} - <small>{pizza.desc}</small></div> )}
        </>
    )
}

export default GetPizzas;