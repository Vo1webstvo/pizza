import React from 'react';
import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useAppDispatch } from '../../redux/hook';
import { setSearchValue } from '../../redux/slices/filterBtnsSlices';

import './input.scss';
const Input = () => {
  const dispatch = useAppDispatch();

  const [localValue, setLocalValue] = useState(''); //локальное состояние, без него работать не будет

  //функция для того, чтоб при поиске пицц, функция делала запрос на серв через 1 сек(debounce)  и useCallback для того, чтоб она создалась только 1 раз и запомнилась, без перевызова когда state изменяется
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      //отложенный запрос на сервер 1 сек
      dispatch(setSearchValue(str));
    }, 1000),
    [],
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e.target.value);
    setLocalValue(e.target.value);
  };

  return (
    <input
      className="search-elem"
      type="text"
      placeholder="введите название пиццы"
      value={localValue}
      onChange={onChangeInput}
    />
  );
};

export default Input;
