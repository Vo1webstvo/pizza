import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setCategory } from '../../redux/slices/filterBtnsSlices';

interface ILiArr {
  label: LiArrLabe;
}

enum LiArrLabe {
  Все = 'Все',
  Мясные = 'Мясные',
  Вегетарианская = 'Вегетарианская',
  Гриль = 'Гриль',
  Острые = 'Острые',
  Закрытые = 'Закрытые',
}

const Categories: React.FC = () => {
  const categoryValue = useAppSelector((state) => state.filter.value);
  const dispatch = useAppDispatch();

  const liArr: ILiArr[] = [
    { label: LiArrLabe.Все },
    { label: LiArrLabe.Мясные },
    { label: LiArrLabe.Вегетарианская },
    { label: LiArrLabe.Гриль },
    { label: LiArrLabe.Острые },
    { label: LiArrLabe.Закрытые },
  ];

  const renderLi = (arr: ILiArr[]) => {
    const elems = arr.map((item, i) => {
      const clazz = i === categoryValue ? ' active' : '';
      return (
        <li className={clazz} key={i} onClick={() => dispatch(setCategory(i))}>
          {item.label}
        </li>
      );
    });

    return <ul>{elems}</ul>;
  };

  const visibleLi = renderLi(liArr);

  return <div className="categories">{visibleLi}</div>;
};

export default Categories;
