import React from 'react';
import PizzaBlock from "../pizzaBlock/PizzaBlock";
import {useHttp} from "../useHttp/useHttp";
import {useState, useEffect} from "react";
import {Skeleton} from "../skeleton/Skeleton";

const PizzaList = () => {
    const [pizzadb, setPizzaDb] = useState([]);
    const [loading, setLoading] = useState(true);
    const {request} = useHttp();

    useEffect(() => {
        request('https://649fc7e3ed3c41bdd7a6aea8.mockapi.io/items')
        .then(res =>  {
            setPizzaDb(res);
            setLoading(false);
        } )
    }, [])



    const elems = pizzadb.map(item => {
        const {id, ...items} = item;

        return (
            <PizzaBlock key={id} {...items}/>
        )
    })

    const loadSkelet = [...new Array(6)].map((_,i) => <Skeleton key={i}/>);
    const renderItems = loading ? loadSkelet : elems;





    return (
        <>
            {renderItems}
        </>
    )
};

export default PizzaList;