import React from 'react';
import {useState} from "react";

const Categories = () => {
  const [active, setActive] = useState(0);

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
      const clazz = i === active ? ' active' : '';
      return (
          <li className={clazz} key={i} onClick={() => setActive(i)}>
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
