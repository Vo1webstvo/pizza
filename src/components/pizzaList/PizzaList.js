import React from 'react';
import PizzaBlock from "../pizzaBlock/PizzaBlock";
import {useHttp} from "../useHttp/useHttp";
import {useState, useEffect} from "react";
import {Skeleton} from "../skeleton/Skeleton";

const PizzaList = ({categoryActive, sortActive, flag, searchValue}) => {
    const [pizzadb, setPizzaDb] = useState([]);
    const [loading, setLoading] = useState(true);




    const {request} = useHttp();

    useEffect(() => {
        setLoading(true);
        const category = categoryActive > 0 ? `category=${categoryActive}` : '';
        const sort = sortActive.sortProperty;
        const search = searchValue ? `search=${searchValue}` : '';  //поиск пицц череззапрос на сервер

        request(
            `https://649fc7e3ed3c41bdd7a6aea8.mockapi.io/items?${category}&${search}&sortBy=${sort}&order=desc`
        )
        .then(res =>  {
            setPizzaDb(res);
            setLoading(false);
        } )
    }, [categoryActive, sortActive, searchValue])



    const elems = (arr) => {
        return arr.map(item => {
            const {id, ...items} = item;

            return (
                <PizzaBlock key={id} {...items}/>
            )
        })
    }

    // фильтруем наш массив с пиццами в зависимости от того что введет пользователь в input
    const searchItemsForInput = (data, term) => {
        if(term.length === '') {
            return data;
        }
        return data.filter(item => {
            return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    //еще один способ поиска через includes
    // const searchItemsForInput = pizzadb.filter(item => {
    //     if(item.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //         return true
    //     }
    //          return false;
    // });
    // const visibleItems = searchItemsForInput



    const visibleItems = searchItemsForInput(pizzadb, searchValue); //получим нас отфильтрованные данные
    const renderItems = elems(visibleItems) //сюда передаем отфильтрованные данные для рендера наших пицц

    const loadSkelet = [...new Array(6)].map((_,i) => <Skeleton key={i}/>); //создание скелетона

    const renderAllItems = loading ? loadSkelet : renderItems;

    // фильтрация нашего массива. переключение от большего к меньшему и наоборот
    const reversedItems = flag ? [...renderAllItems].reverse() : renderAllItems;
    const itemsToRender = flag ? reversedItems : renderAllItems;   // в зависимости от flag что показать, от большего к меньшему или наоборот





    return (
        <>
            {itemsToRender}
        </>
    )
};

export default PizzaList;