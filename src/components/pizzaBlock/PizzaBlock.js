import React from 'react';

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../redux/slices/cartSlice";

const PizzaBlock = ({id,imageUrl, title,types,sizes,price,category,rating}) => {
    const cartItemCount = useSelector(state => state.cart.items.find(item => item.id === id));
    const dispatch = useDispatch();

    const countValue = cartItemCount ? cartItemCount.count : 0 ;    //делаем проверку есть ли что-то в countValue
    const [activeType, setActiveType] = useState(0);
    const [active, setActive] = useState(0);

    const typeNames = ['тонкое', 'традиционное'];

    const addPizzaToCart = () => {
        const itemPizza = {
            id,
            title,
            price,
            imageUrl,
            type: typeNames[activeType],
            size: sizes[active]
        }
        dispatch(addItem(itemPizza));
    }


    const liElems = sizes.map((item, i) => {
        const clazz = active === i ? 'active' : '';
        return (
            <li key={i} className={clazz} onClick={() => setActive(i)}>
                {item} см.
            </li>
        )
    })




    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        types.map(itemNumber => (
                            <li key={itemNumber} className={itemNumber === activeType ? 'active': ''}
                            onClick={() => setActiveType(itemNumber)}>
                                {typeNames[itemNumber]}</li>
                        ))
                    }
                </ul>
                <ul>
                    {liElems}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <button className="button button--outline button--add" onClick={addPizzaToCart}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{countValue}</i>
                </button>
            </div>
        </div>
    );
};

export default PizzaBlock;