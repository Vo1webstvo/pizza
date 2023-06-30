import React from 'react';
import PizzaBlock from "../pizzaBlock/PizzaBlock";
import pizzadb from '../../assets/pizza.json';

const PizzaList = () => {
    const elems = pizzadb.map(item => {
        const {id, ...items} = item;


        return (
            <PizzaBlock
            key={id}
            {...items}
            />
        )

    })

    return (
        <>
            {elems}
        </>
    )
};

export default PizzaList;