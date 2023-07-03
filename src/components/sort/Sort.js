import React from 'react';
import {useState} from "react";


const Sort = ({onChangeSort, value, reverseSort, flag}) => {
    const [open, setOpen] = useState(false);

    const arr = [
        {name : 'популярности', sortProperty: 'rating'},
        {name : 'цене', sortProperty: 'price'},
        {name : 'алфавиту', sortProperty: 'title'},
    ]

    const onClicklListItem = (item) => {
        onChangeSort(item);
        setOpen(false);
    }



  return (
    <div className="sort">
      <div className="sort__label">
          {flag ?
              (
                  <svg
                      onClick={reverseSort}
                      cursor='pointer'
                      width="20"
                       height="12"
                       id="Layer_1"
                       version="1.1" viewBox="0 0 512 512"
                       xmlns="http://www.w3.org/2000/svg">
                      <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"/></svg>

              ) :
              (
              <svg
                onClick={reverseSort}
                  cursor='pointer'
                  width="20"
                  height="12"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                      fill="#2C2C2C"
                  />
                </svg> )}

        <b>Сортировка по:</b>
        <span onClick={() => setOpen(open => !open)}>{value.name}</span>
      </div>
        {open ? (
            <div className="sort__popup">
                <ul>
                    {arr.map((item, i) => {
                        return (
                            <li
                                key={i}
                                className={item.sortProperty === value.sortProperty ? 'active' : ''}
                                onClick={() => onClicklListItem(item)}>{item.name}</li>
                        )
                    })}
                </ul>
            </div>
        ) : null}
    </div>
  );
};

export default Sort;
