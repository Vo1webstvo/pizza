import React from 'react';
import PizzaBlock from "../pizzaBlock/PizzaBlock";
import {useEffect} from "react";
import {Skeleton} from "../skeleton/Skeleton";
import {useDispatch, useSelector} from "react-redux";
import qs from 'qs';
import {useNavigate} from "react-router-dom";
import {fetchPizza} from "../../redux/slices/pizzaSlice";

const PizzaList = () => {
    const navigate = useNavigate();

    const {value, sort, flag, searchValue, pageCount} = useSelector(state => state.filter);
    const {pizzas, status} = useSelector(state => state.pizza);
    const dispatch = useDispatch();


    //парсим наш параметр c адресной строки, лучше сделать хуком useSearchParams
    // useEffect(() => {
    //     if(window.location.search) {
    //         const params = qs.parse(window.location.search.substring(1));
    //         // console.log(params)
    //         dispatch(setParams({...params, sort}))
    //     }
    // },[])

    useEffect(() => {
        const category = value > 0 ? `category=${value}` : '';
        const search = searchValue ? `search=${searchValue}` : '';  //поиск пицц череззапрос на сервер
        dispatch(fetchPizza({
            pageCount,
            category,
            search,
            sort}))
    }, [value, sort.sortProperty, searchValue, pageCount]);


    //адресная строка
    useEffect(() => {
        const queryString = qs.stringify({
            sortProperty: sort.sortProperty,
            value,
            pageCount,
        });
        navigate(`?${queryString}`)
    }, [value, sort.sortProperty, pageCount])



    const elems = (arr) => {
        return arr.map(item => {
            // const {id, ...items} = item;

            return (
                <PizzaBlock
                    key={item.id}
                    {...item}/>
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



    const visibleItems = searchItemsForInput(pizzas, searchValue); //получим нас отфильтрованные данные
    const renderItems = elems(visibleItems) //сюда передаем отфильтрованные данные для рендера наших пицц

    const loadSkelet = [...new Array(6)].map((_,i) => <Skeleton key={i}/>); //создание скелетона

    const renderAllItems = status === 'loading' ? loadSkelet : renderItems;

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