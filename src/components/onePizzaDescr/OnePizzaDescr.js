import React from 'react';
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

const OnePizzaDescr = () => {
    const [data, setData] = useState();
    const {id} = useParams();

    useEffect(() => {
        async function fetchPizza () {
            try {
                const {data} = await axios.get('https://649fc7e3ed3c41bdd7a6aea8.mockapi.io/items/' + id);
                setData(data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchPizza();

    }, [])

    if(!data) {
        return 'Загрузка...'
    }

    return (
        <div className='container'>
            <img style={{width: '200px', height: '200px'}} src={data.imageUrl} alt="pizza"/>
            <h2>{data.title}</h2>
            <h2>{data.price} Р</h2>
        </div>
    );
};

export default OnePizzaDescr;