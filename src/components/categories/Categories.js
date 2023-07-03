import React from 'react';
import {useState} from "react";

const Categories = ({onChangeCategories, value}) => {


  const liArr = [
    {label: 'Все'},
    {label: 'Мясные'},
    {label: 'Вегетарианская'},
    {label: 'Гриль'},
    {label: 'Острые'},
    {label: 'Закрытые'},
  ];

  const renderLi = (arr) => {
    const elems = arr.map((item, i) => {
      const clazz = i === value ? ' active' : '';
      return (
          <li className={clazz} key={i} onClick={() => onChangeCategories(i)}>
            {item.label}
          </li>
      )
    })

    return (
        <ul>
          {elems}
        </ul>
    )
  }

  const visibleLi = renderLi(liArr);

  return (
    <div className="categories">
        {visibleLi}
    </div>
  );
};

export default Categories;
