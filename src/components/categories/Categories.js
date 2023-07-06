import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setCategory} from "../../redux/slices/filterBtnsSlices";

const Categories = () => {
  const categoryValue = useSelector(state => state.filter.value)
  const dispatch = useDispatch();


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
      const clazz = i === categoryValue ? ' active' : '';
      return (
          <li className={clazz} key={i} onClick={() => dispatch(setCategory(i))}>
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
